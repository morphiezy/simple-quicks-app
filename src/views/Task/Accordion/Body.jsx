import React from "react";

const Body = ({ open }) => {
  return (
    <div className={`w-full ${open ? "min-h-auto pt-4 " : "h-0"} transition-all duration-300`}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione
      accusamus, corporis, earum alias facilis porro odit ab rerum fuga
      molestiae repellendus. Labore aliquam amet magnam nemo velit, accusamus
      debitis est minus fuga eius rerum nisi fugit, ipsum voluptate nobis
      voluptates quaerat atque molestiae blanditiis. Fugit consequuntur velit
      enim exercitationem voluptas. Ex consequatur nihil fugiat soluta provident
      voluptate totam fuga. Nesciunt a laudantium ab beatae soluta asperiores
      nulla incidunt sapiente quae fugiat quaerat labore velit commodi
      necessitatibus repellat quasi, saepe, sequi enim exercitationem
      consequuntur quo voluptatem obcaecati libero. Voluptatem nobis at, nisi
      temporibus totam placeat, doloremque nostrum porro suscipit provident
      voluptas?
    </div>
  );
};

export default Body;
