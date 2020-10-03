const validate = require("validate.js");
const validator=require("./tools/validator.tools")
const {ReE,ReS}=require("./tools/helpers.tools")

/**
 * This is the default function for route / GET
 * @param {*} req
 * @param {*} res
 *
 */
  var data = [
    {
      id:1,
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
    {
      id:2,
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
    {
      id:3,
      title: "Generate Lorem Ipsum placeholder text.",
      athor: "FikraSpace",
      text: `<p>     <em style="color: rgb(119, 119, 119); font-family: sans-serif; font-size: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consectetur libero id faucibus nisl tincidunt. Facilisi etiam dignissim diam quis enim lobortis. Elit eget gravida cum sociis         natoque. Purus gravida quis blandit turpis. Est pellentesque elit ullamcorper dignissim cras tincidunt. Metus vulputate eu scelerisque felis. Donec ac odio tempor orci. Nam aliquam sem et tortor consequat. Maecenas volutpat blandit aliquam etiam.         Ac tortor dignissim convallis aenean et tortor. Mauris rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar. Integer quis auctor elit sed vulputate mi sit.</em> </p> <p>     <br> </p> <p>     <br> </p> <p class="ql-align-center">     <strong>. . .</strong> </p> <p class="ql-align-center">     <br> </p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lorem ipsum dolor sit amet</span> </h4> <p>     <br> </p> <p>Varius quam quisque id diam vel quam elementum pulvinar etiam. Est ultricies integer quis auctor. Eget dolor morbi non arcu risus quis varius quam. Eu mi bibendum neque egestas. Enim facilisis gravida neque convallis. Mauris nunc congue nisi vitae suscipit     tellus mauris a diam. Augue mauris augue neque gravida in fermentum et sollicitudin. Lacus sed turpis tincidunt id. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Adipiscing enim eu turpis egestas pretium aenean pharetra. Nibh mauris cursus     mattis molestie a iaculis at.</p> <p>     <br> </p> <p>Ut sem nulla pharetra diam sit amet. Massa sed elementum tempus egestas. Proin sed libero enim sed faucibus turpis. Netus et malesuada fames ac turpis egestas maecenas. Odio facilisis mauris sit amet massa. Et tortor consequat id porta nibh venenatis     cras sed felis. Et netus et malesuada fames ac turpis egestas. In ornare quam viverra orci sagittis eu volutpat odio facilisis. Aliquet risus feugiat in ante metus dictum at tempor. Faucibus interdum posuere lorem ipsum dolor sit. Tortor posuere ac     ut consequat semper viverra nam libero. Interdum velit laoreet id donec ultrices tincidunt arcu non. Venenatis cras sed felis eget velit. Egestas diam in arcu cursus euismod quis viverra nibh. Lectus vestibulum mattis ullamcorper velit sed ullamcorper     morbi tincidunt. Commodo sed egestas egestas fringilla. Id consectetur purus ut faucibus pulvinar elementum integer enim neque.</p> <p>     <br> </p> <p>     <br> </p> <h4>     <span style="font-size: large;">Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet .</span> </h4> <p>     <br> </p> <p>Lobortis mattis aliquam faucibus purus. Amet est placerat in egestas erat imperdiet sed euismod nisi. Pellentesque diam volutpat commodo sed.&nbsp;     <strong>Id faucibus nisl tincidunt eget nullam</strong>. Sed faucibus turpis in eu mi bibendum neque egestas congue. Aliquam ut porttitor leo a diam sollicitudin tempor id. Turpis in eu mi bibendum neque egestas congue. Quisque sagittis purus sit amet volutpat     consequat. At quis risus sed vulputate odio. Netus et malesuada fames ac turpis egestas sed tempus. Vel pretium lectus quam id Leo in.</p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p> <p>     <br> </p>`,
      image: "https://picsum.photos/600/300?grayscale",
      createdAt: "2020-09-24 22:34:00.976273",
      updatedAt: "2020-09-24 22:34:00.976273",
    },
  ];
  module.exports.getArticles = (req, res) => {
  return res.json(data);
  }

// FIXME: do a search for the id inside an array
module.exports.getOneArticle = (req, res) => {
  let id = req.params.id;
  let found=data.filter((el)=>el.id==id)
if(found.length>0)
 return res.json(found);
};




module.exports.postArticle = (req, res) => {
  // get the req body
  let body = req.body;
  //validation
  const isNotValid=validate(body,validator.Article());
  if(isNotValid) return ReE(res,isNotValid);

  // save the data (not today)
  let data = {
    ...body,
  };
  // return the res
  data.id = 123;
  return ReS(res,data)
};






module.exports.putArticle=(req,res)=>{
  let body=req.body;
  let article={
    id:1,
    title:"titleeeee",
    athor:"athoor",
    text:"teeexxxt",
  }
  //validate the req
  const isNotValid=validate(body,validator.Article(false));
  if(isNotValid) return ReE(res,isNotValid);
  //check what to edit
  //edit it
  
Object.keys(body).forEach((key)=>(article[key]=body[key]));
  //  if(body.title) article.title=body.title;
  //  if(body.athor) article.title=body.athor;
  //  if(body.text) article.title=body.text;

  //return
  return ReS(res,article);

}
