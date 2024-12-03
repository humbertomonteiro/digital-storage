import "./section.css";
const Section = ({ title, titleAlign, link, children }) => {
  //titleAlign recebe center ou start.
  return (
    <section className="container-section">
      <div className="title-section" titleAlign={titleAlign}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
