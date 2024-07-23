const Story = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        {/* title */}
        <h5 className="trm-mb-40 trm-title-with-divider">
          My story <span data-number={1} />
        </h5>
        {/* quote */}
        <blockquote
          className="trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          My works and advancements, through my study and dedication, provoke greater challenges so that I may always be ready for new opportunities and challenges. Therefore, let us act accordingly.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
