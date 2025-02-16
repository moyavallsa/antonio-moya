
import { useEffect, useRef } from 'react'
import { Renderer, Camera, Transform, Program, Mesh, Vec2, Vec3, Color } from 'ogl'

interface RibbonsProps {
  baseThickness?: number
  colors?: string[]
  speedMultiplier?: number
  maxAge?: number
  enableFade?: boolean
  enableShaderEffect?: boolean
}

const Ribbons = ({
  baseThickness = 30,
  colors = ['#ffffff'],
  speedMultiplier = 0.5,
  maxAge = 500,
  enableFade = false,
  enableShaderEffect = true,
}: RibbonsProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<Renderer | null>(null)
  const programRef = useRef<Program | null>(null)
  const meshRef = useRef<Mesh | null>(null)
  const pointsRef = useRef<Vec3[]>([])
  const velocitiesRef = useRef<Vec2[]>([])
  const agesRef = useRef<number[]>([])

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current
    const renderer = new Renderer({
      dpr: 2,
      alpha: true,
    })
    rendererRef.current = renderer
    container.appendChild(renderer.gl.canvas)

    const camera = new Camera(renderer.gl)
    camera.position.z = 15

    const scene = new Transform()

    const vertex = /* glsl */ `
      attribute vec3 position;
      attribute vec3 normal;
      
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      
      varying vec3 vNormal;
      
      void main() {
        vNormal = normal;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragment = /* glsl */ `
      precision highp float;
      
      varying vec3 vNormal;
      uniform vec3 uColor;
      uniform float uTime;
      
      void main() {
        float lighting = dot(vNormal, normalize(vec3(1.0)));
        gl_FragColor = vec4(uColor * (0.5 + 0.5 * lighting), 1.0);
        
        if(${enableShaderEffect}) {
          gl_FragColor.rgb += 0.1 * sin(uTime * 0.5 + gl_FragCoord.x * 0.01);
        }
      }
    `

    const program = new Program(renderer.gl, {
      vertex,
      fragment,
      uniforms: {
        uColor: { value: new Color(colors[0]) },
        uTime: { value: 0 },
      },
    })
    programRef.current = program

    const initPoints = () => {
      const points: Vec3[] = []
      const velocities: Vec2[] = []
      const ages: number[] = []

      for (let i = 0; i < 100; i++) {
        points.push(
          new Vec3(
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          )
        )
        velocities.push(
          new Vec2(
            (Math.random() - 0.5) * speedMultiplier,
            (Math.random() - 0.5) * speedMultiplier
          )
        )
        ages.push(Math.random() * maxAge)
      }

      pointsRef.current = points
      velocitiesRef.current = velocities
      agesRef.current = ages
    }

    initPoints()

    const geometry = {
      position: { size: 3, data: new Float32Array(300) },
      normal: { size: 3, data: new Float32Array(300) },
    }

    const mesh = new Mesh(renderer.gl, { geometry, program })
    meshRef.current = mesh
    mesh.setParent(scene)

    const resize = () => {
      renderer.setSize(container.offsetWidth, container.offsetHeight)
      camera.perspective({
        aspect: container.offsetWidth / container.offsetHeight,
      })
    }

    window.addEventListener('resize', resize)
    resize()

    let rafId: number
    const update = (t: number) => {
      if (!programRef.current || !meshRef.current) return
      
      programRef.current.uniforms.uTime.value = t * 0.001

      for (let i = 0; i < pointsRef.current.length; i++) {
        const point = pointsRef.current[i]
        const velocity = velocitiesRef.current[i]

        point.x += velocity.x
        point.y += velocity.y

        if (point.x < -10 || point.x > 10) velocity.x *= -1
        if (point.y < -10 || point.y > 10) velocity.y *= -1

        agesRef.current[i] += 1
        if (agesRef.current[i] > maxAge) {
          point.set(
            Math.random() * 20 - 10,
            Math.random() * 20 - 10,
            Math.random() * 20 - 10
          )
          agesRef.current[i] = 0
        }

        const opacity = enableFade ? 1 - agesRef.current[i] / maxAge : 1
        const thickness = baseThickness * opacity

        const positions = geometry.position.data
        const normals = geometry.normal.data
        
        positions[i * 3] = point.x
        positions[i * 3 + 1] = point.y
        positions[i * 3 + 2] = point.z

        normals[i * 3] = thickness
        normals[i * 3 + 1] = thickness
        normals[i * 3 + 2] = thickness
      }

      meshRef.current.geometry.attributes.position.needsUpdate = true
      meshRef.current.geometry.attributes.normal.needsUpdate = true

      renderer.render({ scene, camera })
      rafId = requestAnimationFrame(update)
    }

    update(0)

    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(rafId)
      renderer.gl.canvas.remove()
    }
  }, [baseThickness, colors, speedMultiplier, maxAge, enableFade, enableShaderEffect])

  return <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
}

export default Ribbons
