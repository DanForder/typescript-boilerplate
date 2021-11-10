interface LayoutProps {
  exampleProp?: boolean;
}

// exampleProp is a placeholder for some layout specific property that may differ from page to page; enableSidebar, showNavigation etc.
// this can be useful for user journeys where you don't want your user to be able to navigate away as easily
const Layout: React.FC<LayoutProps> = ({ exampleProp = false, children }) => {
  return (
    <div className="layout">
      {exampleProp && <span>exampleProp is true</span>}
      <main className="layout__main">{children}</main>
    </div>
  );
};

export default Layout;
