interface LayoutProps {
  enableNavigation?: boolean;
}

const ROOT_CLASSNAME = "layout";

const Layout: React.FC<LayoutProps> = ({
  enableNavigation = false,
  children,
}) => {
  return (
    <div className={ROOT_CLASSNAME}>
      {enableNavigation && (
        <nav className={`${ROOT_CLASSNAME}__nav`}>persistent nav bar</nav>
      )}
      <main className={`${ROOT_CLASSNAME}__main`}>{children}</main>
      <footer className={`${ROOT_CLASSNAME}__footer`}>persistent footer</footer>
    </div>
  );
};

export default Layout;
