const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 mt-auto bg-secondary/50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Antonio Moya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 