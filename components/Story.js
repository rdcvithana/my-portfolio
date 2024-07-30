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
          As a dedicated DevOps Engineer, I continuously pursue end-to-end mastery and scalable system design. Embracing challenges as growth opportunities, I stay prepared for new complexities, turning them into chances for innovation and success.
        </blockquote>
        {/* quote end */}
      </div>
    </div>
  );
};
export default Story;
