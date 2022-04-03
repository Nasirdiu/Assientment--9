import React from "react";
import "./Blog.css";
const Blogs = () => {
  return (
    <div>
      <div className="blog mt-5 w-50 m-auto">
        <h4 className="text-info">What is Semantic Tag?</h4>
        <p>
          Ans:-Semantic HTML tags provide information about the contents of
          those tags that goes beyond just how they look on a page. Text that is
          enclosed in the code tag is immediately recognized by the browser as
          some type of coding language.example: tag name:code ,span,strong,h1 to
          h6 etc.
        </p>
      </div>
      <div className="blog mt-5 w-50 m-auto">
        <h4 className="text-info">
          What will be different of inline block and inline block element?
        </h4>
        <p>
          Ans:-inline The element doesn't start on a new line and only occupy
          just the width it requires. You can't set the width or height.
          Inline-block: It's formatted just like the inline element, where it
          doesn't start on a new line. BUT, you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
