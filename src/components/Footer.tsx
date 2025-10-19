const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="container text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} All rights reserved. Built with passion and React.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
