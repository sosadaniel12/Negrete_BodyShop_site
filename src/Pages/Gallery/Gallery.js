import Gcard from "../../components/GalleryCard/Gcard";
import "./Gallery.css";

const pictures = [
  "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/149528901_2702430209996219_3747656983996980100_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=2kTdjMvNO0UAX_y_3sJ&_nc_ht=scontent-dfw5-1.xx&oh=00_AT8IFOOYTkmqg_7-E7LR_QVRR3AY9Fxo5acQ8_ZEuk6vUw&oe=6222BB5F",
  "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/149122345_2702430269996213_2134872732888511759_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_ohc=joEbdmDkNLUAX9YM82M&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-eQGuskIZpyuT8RTwvsS-eEOyyWg2NLMpY-Kzk-VOgNg&oe=6224A490",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.6435-9/149808413_2702450779994162_7678314637953692790_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=olxtqp3BQfAAX96Ip1S&_nc_ht=scontent-dfw5-2.xx&oh=00_AT8RHYNJ4YY3Z0JXICjxDqCttJzwqA8jT5Ze05frMsJGuw&oe=62248CED",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/217951091_2817932165112689_7190872472848401893_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_ohc=GWIGSM4h2zAAX8UANRA&tn=pHZFH3cZ5dZFEVK8&_nc_ht=scontent-dfw5-2.xx&oh=00_AT860xbRzb03a5uFPYSfvWIloXOisWO_9wVNEsikYgVfJg&oe=62035210",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/202062220_2817932208446018_6747402426317721209_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_ohc=G1uisa83NWQAX-OfvEK&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_h8OixdTINFjUypn8hURjNf0DVuwIMA-EkAwREWYpIFA&oe=6203BBD0",
  "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/190947093_2817932245112681_3300934958845236580_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=_c5krr3qRyQAX_Ecexg&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-QhrCSraeDh3VeXRIFYJOKKn9ra05X4WtARmKHXI-Gvw&oe=62040289",
  "https://scontent-dfw5-1.xx.fbcdn.net/v/t39.30808-6/176007277_2817932301779342_8641950884085948785_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_ohc=qgmyWzV4TX8AX_YlVTz&tn=pHZFH3cZ5dZFEVK8&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-9ARRvPr0AbUJpLOKRJXiJTTylS_ZuhIP2wSzCHnn51w&oe=6203D7C7",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/11953159_1549312158641369_4195298965026371442_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=FV03umi7740AX-Rh430&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_2OcWPTF7XLtHyeCy69GWBFBOh4DOllbHjT6nmvBVlcA&oe=62248D2B",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/11261530_1549312185308033_3397081622651870906_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=oVDd4sMREJkAX8Ug4Jg&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_9KfLaKtLXjHuPkU45AiFztWOSHsH-kkmUVaLjyQG5gA&oe=6225FC35",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/12036982_1551307905108461_8798440613485137529_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=v9sYJMdd_rwAX8sIHP8&_nc_oc=AQm47PKSxVdvhZPa42YqgZ3ogzXVTYE6UMWvlyHyNW2l8I9QU3JNy3z62Gg3CJqeT-Q&_nc_ht=scontent-dfw5-2.xx&oh=00_AT_0v59xukgH-sBQEH7YaeDrbxL_az0Y7x4iMPLxrhozvw&oe=622429ED",
  "https://scontent-dfw5-1.xx.fbcdn.net/v/t1.18169-9/12049608_1554960381409880_8871546957487030512_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=srDRi4mFmzkAX-EX0IS&_nc_ht=scontent-dfw5-1.xx&oh=00_AT-EzoWeFjErsSlPjZcroRxPBZc2Z321JxtAYp6UxjDpcw&oe=6226D488",
  "https://scontent-dfw5-2.xx.fbcdn.net/v/t1.18169-9/12049195_1554960424743209_8960031481221543378_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=kLmt89BS9zwAX_jspY8&_nc_ht=scontent-dfw5-2.xx&oh=00_AT-OCjZYS6wgoOs1_JJcYtyKnpTDyTu--ZBAAGIsiT0dvg&oe=62254A62",
];

const Gallery = () => {
  return (
    <div className="gallery" id="Gallery">
      <h1 className="section-header">Gallery</h1>
      <div className="gallery-container">
        {pictures.map((picture, index) => {
          return <Gcard image={picture} alt={`picture ${index}`} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Gallery;
