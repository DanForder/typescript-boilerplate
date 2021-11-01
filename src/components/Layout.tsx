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
      <header className={`${ROOT_CLASSNAME}__header`}>
        header
        {enableNavigation && (
          <nav className={`${ROOT_CLASSNAME}__nav`}>nav</nav>
        )}
      </header>
      <main className={`${ROOT_CLASSNAME}__main`}>{children}</main>
    </div>
  );
};

export default Layout;
