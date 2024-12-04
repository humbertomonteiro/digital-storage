import "./section.css";
const Section = ({ title, titleAlign, link, children }) => {
  //titleAlign recebe center ou start.
  return (
    <section className="container-section container">
      <div className="title-section" data-title-align={titleAlign}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
