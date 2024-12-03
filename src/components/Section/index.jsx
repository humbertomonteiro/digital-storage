const Section = ({ title, titleAlign, link, children }) => {
  return (
    <section>
      <div style={{ textAlign: { titleAlign } }}>
        <h2>{title}</h2>
        {link && <a href={link.href}>{link.text}</a>}
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section;
