import { useState } from "react";
import Header from "./components/Header";
import Stories from "./components/Stories";
import { Story } from "../types";
import dummyImage from "./assets/dummy_image.jpeg";
import NavigationBar from "./components/NavigationBar";
import PostComponent from "./components/Post";
import Feed from "./components/Feed";
import { Post } from "../types";

function App() {
  const stories: Story[] = [
    { user: { name: "sebasjuarez", image: dummyImage }, closeFriend: true },
    { user: { name: "rodri.zelaya", image: dummyImage }, closeFriend: true },
    { user: { name: "lupitaramirez", image: dummyImage }, closeFriend: false },
    { user: { name: "feroliiivares", image: dummyImage }, closeFriend: false },
    { user: { name: "montsegomez", image: dummyImage }, closeFriend: false },
    { user: { name: "alexiachacon", image: dummyImage }, closeFriend: false },
    { user: { name: "diego_serrano", image: dummyImage }, closeFriend: false },
  ];

  const owner: Story = {
    user: { name: "sebasjuarez", image: dummyImage },
    closeFriend: true,
  };

  const post : Post ={
    owner : owner,
    description : "Excited to announce the upcoming Career in Public Sector Fair! 🔥 This event is perfect for students looking to explore their options and find their passion in the public sector. From government agencies to non-profit organizations, the fair will feature a diverse range of organizations that are making a positive impact in our communities. Learn about various career paths, network with professionals, and gain valuable insights into the world of public service. Don't miss out on this opportunity to take the next step in your career journey!💼",
    post : dummyImage,
    likes : 1000,
    comments : 20,
    hasStory : true
  }


  return (
    <div className="min-h-screen relative">
      <Header />
      <Stories stories={stories} />
      <Feed posts={[post]}/>
      {/* <Post
        owner={owner}
        post={dummyImage}
        description="Excited to announce the upcoming Career in Public Sector Fair! 🔥 This event is perfect for students looking to explore their options and find their passion in the public sector. From government agencies to non-profit organizations, the fair will feature a diverse range of organizations that are making a positive impact in our communities. Learn about various career paths, network with professionals, and gain valuable insights into the world of public service. Don't miss out on this opportunity to take the next step in your career journey!💼"
        comments={10}
        likes={10}
        hasStory
      /> */}
      <NavigationBar />
    </div>
  );
}

export default App;
