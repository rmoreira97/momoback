const mongoose = require('mongoose');
const MomoFamily = require('./models'); // Replace with the actual path to your model file

// Define the MongoDB connection URI
const mongoURI = 'mongodb://localhost:27017/gorillas';

// Function to seed the database
async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });



    const data = [


      {
   "ID": 1,
   "Name":"Genki",
   "About":{
      "role":[
         "Mother",
         "Wife"
      ],
      "gender":"Female",
      "birthdate":"June 24th, 1986",
      "location":"Kyoto City Zoo"
   },
   "ProfilePic":"https://i.pinimg.com/736x/d3/18/20/d318201fb5c8b7aee7efc855e1fff01e.jpg",
   "CoverPhoto":"https://bzmaestroeats.files.wordpress.com/2021/10/genki.jpg",
   "Gallery":[
      "https://i.ytimg.com/vi/qoygtJASsqo/maxresdefault.jpg",
      "https://i.redd.it/2mgyw3c1mj961.jpg"
   ],
   "Posts": 
   [
  {
    "PostID": "1",
    "Date": "2023-11-28 10:30 AM",
    "Caption": "They don't call her the best mother for nothing!",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F1%2F22f5605389a3a577fb6ec6c602b092e0b77ab194.png?alt=media&token=ac515b67-288b-48ec-9175-2e279d716f7b",
      "Type": "image"
    }
  },
  {
    "PostID": "2",
    "Date": "2023-11-27 04:45 PM",
    "Caption": "Reunited with Gentaro, many years ago..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F1%2FScreenshot%202023-11-28%20211734.jpg?alt=media&token=58f0f640-d26d-481a-96c1-d59ceba99cdb",
      "Type": "image"
    }
  },
  {
    "PostID": "3",
    "Date": "2023-11-26 08:15 AM",
    "Caption": "Kintaro loves to sleep on his mother..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F1%2Ff8f23ccd95eddfa17c6e9b28a38042c2cdd8f63d.png?alt=media&token=9dd43173-3231-417c-a4ee-2b211af8b57e",
      "Type": "image"
    }
  },
  {
    "PostID": "4",
    "Date": "2023-11-25 02:00 PM",
    "Caption": "With Gentaro, years ago..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F1%2Fbaby-gorilla-at-kyoto-zoo.png?alt=media&token=d6a53f37-e670-4c49-90ba-c6c635545aa8",
      "Type": "image"
    }
  }

],
   
   "Bio":{
      "Feature":"Genki was born at Kyoto City Zoo. Her parents were Makk and Hiromi. In her youth, Genki was known for being a bit of a troublemaker, which posed challenges for Hiromi in raising her. Genki was moved to Ueno in Tokyo for a breeding project, where she encountered Biju, a male gorilla who was initially compatible with her until Momoko entered the scene. Biju fell for Momoko, affecting his relationship with Genki, leading to Genki's emotional struggles. She became mentally unstable and even resorted to self-mutilation, a behavior that continued after her return to Kyoto Zoo. Her return was necessitated by the significant weight loss and danger to her life. Genki would pick at her hands and feet during this time. However, the reunion with her mother, Hiromi, helped her regain her original weight and mental stability. The turning point in Genki's life was her meeting with Momotaro, who turns out to be the son of Genki's former lover, Biju, and her rival, Momoko. Prior to their meeting, the Kyoto City Zoo had shown her images of Momotaro in order to prepare her for his arrival and study her reactions. Their encounter was swift, and they fell in love quickly, with Genki seeing shades of her past love, Biju, in Momotaro. Now, Genki has two sons, Gentaro and Kintaro, and has been an excellent partner for Momotaro. She is known for having a big appetite, which could be attributed to her love for food and potential digestion issues."
   },
   "Timeline":{
      "Events":[
         {
            "event_date":"1986-06-24",
            "event_description":"Genki was born at Kyoto City Zoo. Her father is Makk, and her mother is Hiromi."
         },
         {
            "event_date":"1997-03-19",
            "event_description":"Genki was relocated to Ueno Zoological Gardens at a healthy weight of 106.5 kg."
         },
         {
            "event_date":"1999-11-29",
            "event_description":"Genki was relocated back to Kyoto City Zoo after being involved in a love triangle with Momoko, competing for the attention of Biju. Genki returned to Kyoto in a depressed state with a weight of 68 kg."
         },
         {
            "event_date":"2011-12-21",
            "event_description":"After being introduced to Momotaro and eventually falling in love, Genki successfully gave birth to Gentaro, whose father was Momotaro. This birth marked the first successful mating between two gorillas born in Japan."
         },
         {
            "event_date":"2012",
            "event_description":"Genki was unable to produce sufficient milk for Gentaro to survive. As a result, the two were separated for almost a year, as Gentaro had to be artificially raised by a zookeeper to ensure his survival."
         },
         {
            "event_date":"2013-2018",
            "event_description":"Genki was eventually reunited with Gentaro and successfully raised him to become an admirable, healthy gorilla boy."
         },
         {
            "event_date":"2018-12-19",
            "event_description":"Genki gave birth to Kintaro, whose father was Momotaro. Genki had to be given supplements in order to produce sufficient milk for Kintaro. When this failed, Kintaro would be fed by zookeepers, but there was no need to separate him from the troop."
         },
         {
            "event_date":"2019-2023",
            "event_description":"Genki successfully raised Kintaro to become an independent and remarkably strong gorilla boy, like Gentaro before him."
         }
      ]
   }
},
{   
   "ID": 2,
   "Name":"Momotaro",
   "About":{
      "role":[
         "Father",
         "Husband"
      ],
      "gender":"Male",
      "birthdate":"July 3rd, 2000",
      "location":"Kyoto City Zoo"
   },
   "ProfilePic":"https://i.imgur.com/ILxhXKh.jpeg",
   "CoverPhoto":"https://i.imgur.com/UIfiXa5.jpg",
   "Gallery":[
      "https://pbs.twimg.com/media/E3sEnOfWUAc7-uw.jpg",
      "https://i.pinimg.com/originals/71/06/15/71061590e8f78f5501af7a91f3ac10a1.png",
      "https://pds.exblog.jp/pds/1/201710/11/39/e0363539_20575501.jpg"
   ],
   
   "Posts": 
   [
  {
    "PostID": "1",
    "Date": "2023-11-28 10:30 AM",
    "Caption": "Can you guess who the leader of the group is?",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FRPReplay_Final1600768532.mov?alt=media&token=65d90cae-0e69-446c-9c28-8225e579a76a",
      "Type": "video"
    }
  },
  {
    "PostID": "2",
    "Date": "2023-11-27 04:45 PM",
    "Caption": "A mighty fine lunch..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FIMG_0591.png?alt=media&token=fe4c7e63-2a17-484e-8910-8f03515b66ee",
      "Type": "image"
    }
  },
  {
    "PostID": "3",
    "Date": "2023-11-26 08:15 AM",
    "Caption": "Momotaro is impressed by his youngest son's drumming skills..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FRPReplay_Final1599737558.mov?alt=media&token=31dbe1ce-9e99-446a-a258-dece203db597",
      "Type": "video"
    }
  },
  {
    "PostID": "4",
    "Date": "2023-11-25 02:00 PM",
    "Caption": "Kintaro tends to stick around his father, Momotaro, a lot.",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FIMG_4826.png?alt=media&token=39a3f5a8-081b-4ffd-8f91-7bf268448c2b",
      "Type": "image"
    }
  },
  {
    "PostID": "5",
    "Date": "2023-11-24 09:45 AM",
    "Caption": "Boogers are a valid food source for gorillas, as they contain a lot of protein.",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2Fjoined_video_f5a0af9f7d074a7e8b35543b50e9fc83.mov?alt=media&token=142835e3-a244-41b5-b8ed-fccdfd1dd446",
      "Type": "video"
    }
  },
  {
    "PostID": "6",
    "Date": "2023-11-23 05:20 PM",
    "Caption": "Momotaro loves to wear a blanket on his head for shade.",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FIMG_5858.png?alt=media&token=07392aad-27a3-4b8d-ac1d-d9fee2a4a7ea",
      "Type": "image"
    }
  },
  {
    "PostID": "7",
    "Date": "2023-11-22 11:10 AM",
    "Caption": "Dozing off..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2FIMG_3766.png?alt=media&token=dcabdfb0-e9ee-4f4b-b82b-58f8fcd3b34b",
      "Type": "image"
    }
  },
  {
    "PostID": "8",
    "Date": "2023-11-21 03:55 PM",
    "Caption": "Return of the Jedi...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F2%2F00a9d231d189c0c879bc8df2ceccf311.jpg?alt=media&token=2656d9ba-7144-4a53-b3c2-93e831e73576",
      "Type": "image"
    }
  }

],
   "Bio":{
      "Feature":"Momotaro was born in Ueno Zoo in Tokyo, his mother being Momoko, who is also the mother of Sumomo. He is Momoko's first child, and his father was Biju, who passed away at the age of 12. Unfortunately, Momotaro never had the chance to see his father as he was born after Biju's death. At that time, Ueno Zoo had a gathering of many gorillas from across Japan, and Genki was among them. Initially, Genki and other female gorillas were Biju's partners, but things changed when Momoko joined the herd after Biju fell for her. Momoko and Momotaro spent their time together as mother and child after Biju's demise, which meant Momotaro had never interacted with other gorillas, except for a brief period with a female gorilla named Laura. Over time, Momoko and Momotaro moved between Ueno and Chiba. Upon returning to Ueno, Momoko was living with a male gorilla, leaving Momotaro alone. Then, the day came for Momotaro to leave for the Kyoto City Zoo. Some interesting facts about Momotaro include his aversion to soil, which likely stems from growing up on concrete. He also has a strong attachment to food, as he never had to compete for it due to his upbringing. Additionally, Momotaro dislikes helmets, likely due to a traumatic experience during his move from Ueno to Kyoto. His drumming behavior is relatively rare, occurring around 10 times a year and more commonly when Gentaro is drumming. As for Momotaro's interactions with female gorillas, it's suggested that his lack of experience living with other gorillas may be a significant factor. However, with his current living situation alongside Genki and his two sons, Gentaro and Kintaro, it's unlikely that he is inherently bad with female gorillas."
   },
   "Timeline":{
      "Events":[
         {
            "event_date":"2000-07-03",
            "event_description":"Momotaro was born at Ueno Zoological Gardens in Tokyo, Japan. He was brought up by his mother, Momoko."
         },
         {
            "event_date":"2002-07-08",
            "event_description":"Momotaro and Momoko moved to Chiba Zoological Park, where they resided for several years."
         },
         {
            "event_date":"2008-12-02",
            "event_description":"Momotaro and Momoko returned to Ueno Zoological Gardens in Tokyo."
         },
         {
            "event_date":"2010-10-18",
            "event_description":"Momotaro was relocated to Kyoto City Zoo with the intention of breeding with Genki. The acclimation process was successful, and they became a happy couple."
         },
         {
            "event_date":"2011-12-21",
            "event_description":"Gentaro was born at Kyoto City Zoo, becoming Momotaro's son. His mother was Genki. In the years to come, Momotaro would gradually learn to become a father."
         },
         {
            "event_date":"2018-12-19",
            "event_description":"Kintaro was born at Kyoto City Zoo, becoming Momotaro's second son. His mother was also Genki. Momotaro and Kintaro eventually developed a strong relationship as Momotaro displayed once again his superb abilities as a father."
         }
      ]
   }
},
{  "ID": 3, 
   "Name":"Gentaro",
   "About":{
      "role":[
         "Son",
         "Brother"
      ],
      "gender":"Male",
      "birthdate":"December 21st, 2011",
      "location":"Kyoto City Zoo"
   },
   "ProfilePic":"https://pbs.twimg.com/media/EuC8B3MXUAUNXGa.jpg:large",
   "CoverPhoto":"https://i.imgur.com/9j8Sg50.jpg",
   "Gallery":[
      "https://shigen.nig.ac.jp/gain/image_data/gori/indi/0096/20120625183625_0_20120623WP077.jpg",
      "https://shigen.nig.ac.jp/gain/image_data/gori/indi/0096/20140910184446_1_IMG_2226.jpg",
      "https://pbs.twimg.com/media/E1MW7KYXIAItCV9?format=jpg&name=large",
      "https://pbs.twimg.com/media/FHEfdjXWYAkX2kp.jpg:large"
   ],
   
   "Posts": [
   {
    "PostID": "1",
    "Date": "2023-11-28 10:30 AM",
    "Caption": "A show of force!.... Gorillas avoid looking eachother in the eye, as it is a sign of aggression and here, Gentaro was simply testing the waters...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2Fyqdf6z.mp4?alt=media&token=02e9621e-74dd-4d2e-9a35-d5567bf86bb7",
      "Type": "video"
    }
  },
  {
    "PostID": "2",
    "Date": "2023-11-27 04:45 PM",
    "Caption": "Gentaro and his father...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FIMG_0898.png?alt=media&token=d9095276-8640-489c-885e-9e1aec6d9258",
      "Type": "image"
    }
  },
  {
    "PostID": "3",
    "Date": "2023-11-26 08:15 AM",
    "Caption": "Gentaro's studies, he's the most profilic mathematician in the family...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FRPReplay_Final1619373778.mov?alt=media&token=e6972539-ba24-4e2d-98fd-de69682802fa",
      "Type": "video"
    }
  },
  {
    "PostID": "4",
    "Date": "2023-11-25 02:00 PM",
    "Caption": "Deep in thought...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2Fkleqwm.mp4?alt=media&token=741640be-3892-4ed7-9719-e17d26dbe27e",
      "Type": "video"
    }
  },
  {
    "PostID": "5",
    "Date": "2023-11-24 09:45 AM",
    "Caption": "A boy filled with wonder...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FIMG_1029.png?alt=media&token=2aec12f5-4d0e-409a-ab0d-88efa9f9643c",
      "Type": "image"
    }
  },
  {
    "PostID": "6",
    "Date": "2023-11-23 05:20 PM",
    "Caption": "Gentaro and his favorite playmate..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FIMG_0904.png?alt=media&token=74854594-4399-4385-81ac-5f387e9cd84e",
      "Type": "image"
    }
  },
  {
    "PostID": "7",
    "Date": "2023-11-22 11:10 AM",
    "Caption": "Hiding from the others..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FIMG_0899.png?alt=media&token=e79203fe-1b84-40f5-b62f-e8918677066c",
      "Type": "image"
    }
  },
  {
    "PostID": "8",
    "Date": "2023-11-21 03:55 PM",
    "Caption": "Gentaro occasionally sucks his finger, a behavior he adopted as a child.",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F3%2FIMG_0901.png?alt=media&token=65e8459a-5b8e-44ef-ac3f-0cfadb720a84",
      "Type": "image"
    }
  }

],
   "Bio":{
      "Feature":"Gentaro was born in Kyoto City Zoo at 12:12 am on December 21st, 2011, making him the first child born between two gorillas born in Japan. Initially, Gentaro faced challenges in getting enough milk from his mother, Genki, which led to him being artificially fed. However, the zookeepers introduced Gentaro to Genki so that he could eventually return to his family. Their reunion had its initial challenges, with Genki needing time to figure out how to interact with Gentaro, and vice versa. Despite being mother and child, they were sometimes separated at night during this period. However, this separation didn't last long, and Genki quickly resumed her role as Gentaro's caregiver. Gentaro's upbringing differed from that of human babies, as gorilla infants spend 24 hours a day with their mothers during their first year. It's also mentioned that Gentaro might become a silverback when he's older, but the exact timing is uncertain and may depend on various factors. Additionally, the question of when Gentaro will leave his family remains unanswered and is subject to negotiations between zoos. There's also speculation about Gentaro potentially partnering with Annie from Higashiyama Zoo, although discussions among zoos play a significant role in these decisions.."
   },
   "Timeline":{
      "Events":[
         {
            "event_date":"2011-12-21",
            "event_description":"Gentaro's birth at Kyoto City Zoo, marking him as the first child born between two gorillas in Japan."
         },
         {
            "event_date":"2012",
            "event_description":"The early months of Gentaro's life, during which he faced challenges in obtaining sufficient milk from his mother, Genki. Zookeepers initiated artificial feeding to ensure his well-being."
         },
         {
            "event_date":"2013",
            "event_description":"Gentaro's reunion with Genki after their initial separation. They both needed time to adapt to their roles, and Genki resumed her critical role as Gentaro's primary caregiver."
         },
         {
            "event_date":"2014",
            "event_description":"Gentaro finally adjusted to life as a young gorilla and became the jewel of the family until Kintaro's arrival in the following years."
         },
         {
            "event_date":"2018-2022",
            "event_description":"During this period, Gentaro received less attention from his mother due to Kintaro's birth. He adapted and learned how to become a big brother, caring for Kintaro gently. This process had its ups and downs, but Gentaro has become a role model sibling."
         },
         {
            "event_date":"2023",
            "event_description":"In the year 2023, Gentaro has shown substantial growth in size and muscle development. He has grown to be on the cusp of silverback-hood. However, due to Momotaro's presence, he has not fully realized the transformation into an adult."
         }
      ]
   }
},
{     
   "ID": 4, 
   "Name":"Kintaro", 
   "About":{
      "role":[
         "Son",
         "Brother"
      ],
      "gender":"Male",
      "birthdate":"December 19th, 2018",
      "location":"Kyoto City Zoo"
   },
   "ProfilePic":"https://bzmaestroeats.files.wordpress.com/2021/10/kintaro.jpg",
   "CoverPhoto":"https://i.pinimg.com/originals/c2/a7/7a/c2a77a148358a89a60c4f6986ce4c5c0.jpg",
   "Gallery":[
      "https://pbs.twimg.com/media/FKmjMQ4XMAAxY2X.jpg:large",
      "https://i.pinimg.com/1200x/3f/9b/d9/3f9bd9001a425f24f95fa97b2a196211.jpg",
      "https://i.ytimg.com/vi/Z2DnBFtqbto/maxresdefault.jpg",
      "https://i.pinimg.com/736x/ec/10/2a/ec102ac948632962afcdeeab120bbbef.jpg",
      "https://yt3.googleusercontent.com/MG-pAdNp8brlUGFp0LVI8PV5oGQ20BYk2EdNHeoJ81KS5wPM_io9fF1xxqQGiKbDgBGrWW_h=s900-c-k-c0x00ffffff-no-rj"
   ],"Posts": [
  {
    "PostID": "1",
    "Date": "2023-11-28 10:30 AM",
    "Caption": "Kintaro with his Dad, Momotaro!",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2Fmaxresdefault%20(1).jpg?alt=media&token=edbb69f8-d5bf-43d5-9dd2-67b2968224e1",
      "Type": "image"
    }
  },
  {
    "PostID": "2",
    "Date": "2023-11-27 04:45 PM",
    "Caption": "A few years later with his Dad..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FEyTF7utWQAgWTMN.jpg?alt=media&token=8fe10488-4680-43d4-8ebc-1f1b132bf84b",
      "Type": "image"
    }
  },
  {
    "PostID": "3",
    "Date": "2023-11-26 08:15 AM",
    "Caption": "Drumming practice...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FRPReplay_Final1639960206.mov?alt=media&token=d56b3351-3851-4709-b7d2-db8ca156440f",
      "Type": "video"
    }
  },
  {
    "PostID": "4",
    "Date": "2023-11-25 02:00 PM",
    "Caption": "Did you get scared?",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2Ffccc4cb993ff4546a233144207b35152.mov?alt=media&token=01656bae-8c0f-4e26-b89e-e1d1d4a35314",
      "Type": "video"
    }
  },
  {
    "PostID": "5",
    "Date": "2023-11-24 09:45 AM",
    "Caption": "Whoops...",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FRPReplay_Final1615244252.mov?alt=media&token=b1fe5f2d-0756-46b6-aceb-80a28422cd09",
      "Type": "video"
    }
  },
  {
    "PostID": "6",
    "Date": "2023-11-23 05:20 PM",
    "Caption": "Bidepalism is my strong suit..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FIMG_6055.mov?alt=media&token=a48f9393-3bbb-46e6-a7cc-1438a72b19aa",
      "Type": "video"
    }
  },
  {
    "PostID": "7",
    "Date": "2023-11-22 11:10 AM",
    "Caption": "Dad was still getting used to dealing with Kintaro..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FIMG_9691.mov?alt=media&token=735bd052-e579-43df-b644-fe74439b5419",
      "Type": "video"
    }
  },
  {
    "PostID": "8",
    "Date": "2023-11-21 03:55 PM",
    "Caption": "Kinatro came out victorious in the end..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2Fvideo.mov?alt=media&token=7c865fea-3d6f-411a-ba97-6c1f1d544aac",
      "Type": "video"
    }
  },
   {
    "PostID": "9",
    "Date": "2023-11-28 10:30 AM",
    "Caption": "Kintaro's bipedalism is getting better!",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FRPReplay_Final1693593579.mov?alt=media&token=79ee1c6c-c305-4a31-a432-191d7c8ae508",
      "Type": "video"
    }
  },
  {
    "PostID": "10",
    "Date": "2023-11-27 04:45 PM",
    "Caption": "Kintaro's drumming was still in its early stages..",
    "Media": {
      "Url": "https://firebasestorage.googleapis.com/v0/b/mofamily-4c06a.appspot.com/o/posts%2F4%2FRPReplay_Final1608107672.mov?alt=media&token=fffd9b47-e73b-4107-8f65-00ecce0f5f3b",
      "Type": "video"
    }
  }

 

],
   "Bio":{
      "Feature":"Kintaro was born in Kyoto City Zoo on December 19th, 2018. He is the son of Momotaro and Genki, making him a valuable addition to the gorilla family. Kintaro was raised by his mother, Genki, but his milk intake required supplementation during his early years due to Genki's low milk production. Despite this, Kintaro observed how Momotaro and Gentaro interacted and showed great progress in becoming a strong, independent gorilla despite his age and initial trials in life. He has a strong-willed and caring nature, becoming a cherished member of the family. Kintaro's journey as a young gorilla is just beginning, and he holds a special place in the hearts of those who follow the family's story.."
   },
   "Timeline":{
      "Events":[
         {
            "event_date":"2018-12-19",
            "event_description":"Kintaro's birth at Kyoto City Zoo, becoming the second son of Momotaro and Genki."
         },
         {
            "event_date":"2019-2021",
            "event_description":"During his early years, Kintaro's milk intake required supplementation due to Genki's low milk production. Despite this, there was no need to separate him from his mother."
         },
         {
            "event_date":"2022",
            "event_description":"Kintaro observed how Momotaro and Gentaro interacted, showing great progress in becoming a strong, independent gorilla despite his age and initial trials in life."
         }
      ]
   }
}
]


 // Insert data into the database
 await MomoFamily.insertMany(data);

 console.log('Database seeded successfully.');
} catch (error) {
 console.error('Error seeding database:', error);
} finally {
 // Disconnect from MongoDB
 await mongoose.disconnect();
}
}

// Call the seedDatabase function to seed the database
seedDatabase();