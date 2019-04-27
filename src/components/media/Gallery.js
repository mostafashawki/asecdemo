import React from "react";
import SideBar from "../SideBar";
import GalleryC from "react-grid-gallery";
export default function Gallery() {
  const IMAGES = [
    {
      src: "https://i.imgur.com/GGmhc8t.jpg",
      thumbnail: "https://i.imgur.com/GGmhc8t.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      //isSelected: true,
      caption: "caption 1"
    },
    {
      src: "https://i.imgur.com/byYZz26.jpg",
      thumbnail: "https://i.imgur.com/byYZz26.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      //tags: [
      //{ value: "Ocean", title: "Ocean" },
      //{ value: "People", title: "People" }
      //],
      caption: "caption 2"
    },

    {
      src: "https://i.imgur.com/hUqEfW2.jpg",
      thumbnail: "https://i.imgur.com/hUqEfW2.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "caption 3"
    },
    {
      src: "https://i.imgur.com/gGSqLaz.jpg",
      thumbnail: "https://i.imgur.com/gGSqLaz.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 174,
      caption: "caption 4"
    }
  ];
  return (
    <div>
      <div id="msg" style={{ height: "70px" }} />
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8">
            <h2>Gallery</h2>
            <GalleryC images={IMAGES} />
          </div>
          <div className="col-sm-4 col-md-4">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
