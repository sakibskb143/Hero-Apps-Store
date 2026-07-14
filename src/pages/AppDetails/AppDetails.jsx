import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import downloadicon from "../../assets/icon-downloads.png";
import ratingicon from "../../assets/icon-ratings.png";
import reviewicon from "../../assets/icon-review.png";
import { addToLocalS, getFromLS } from "../../Utilities/addToDB";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { toast } from "react-toastify";

const AppDetails = () => {
  const [toggle, setToggle] = useState(false);
  const softwareData = useLoaderData();
  const params = useParams().id;
  //console.log(softwareData);

  const data = softwareData.find((data) => data.id === Number(params));
  const {
    id,
    title,
    reviews,
    ratingAvg,
    downloads,
    image,
    ratings,
    size,
    companyName,
  } = data;
  //console.log('datavaue',data);

  useEffect(() => {
    const data = getFromLS();
    console.log(data);
    if (data.includes(Number(id))) {
      setToggle(true);
    }
  }, []);

  const handleAddToLocalS = () => {
    addToLocalS(id);
    setToggle(true);
  };
  return (
    <div className="bg-[#F1F5E8] py-20 ">
      <div className="max-w-7xl mx-auto space-y-10 md:space-y-20">
        <div className="flex flex-col md:flex-row  gap-10 items-center justify-center ">
          <div>
            <img
              className="max-w-80 h-full rounded-xl"
              src={image}
              alt={title}
            />
          </div>
          <div className="flex flex-col flex-1">
            <h1 className="text-3xl font-bold text-[#001931] mb-3">{title}</h1>
            <p>
              Developed by <span>{companyName}</span>
            </p>
            <div className="divider w-full"></div>
            <div className="flex gap-20 mb-5">
              <div>
                <img src={downloadicon} alt="" />
                <p>
                  <small>Downloads</small>
                </p>
                <h1 className="text-3xl text-[#001931] font-bold">
                  {`${downloads / 1000000}`}M
                </h1>
              </div>
              <div>
                <img src={ratingicon} alt="" />
                <p>
                  <small>Ratings</small>
                </p>
                <h1 className="text-3xl text-[#001931] font-bold">{`${ratingAvg}`}</h1>
              </div>
              <div>
                <img src={reviewicon} alt="" />
                <p>
                  <small>Review</small>
                </p>
                <h1 className="text-3xl text-[#001931] font-bold">
                  {`${reviews / 1000}`}K
                </h1>
              </div>
            </div>
            <div className="w-full">
              <div onClick={handleAddToLocalS}>
                <button className=" bg-[#00D390] py-4  px-8 text-2xl rounded-2xl text-center text-white">
                  {toggle ? `Installed (${size}MB)` : `Install Now (${size}MB)`}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* rechart */}
        {/* Recharts */}
        <div className="w-full h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ratings}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#FF8811" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* description */}
        <div>
          <h1 className="text-[#001931] font-bold text-3xl mb-2">Description</h1>
          <p className="text-[#627382] text-lg">
            This focus app takes the proven Pomodoro technique and makes it even
            more practical for modern lifestyles. Instead of just setting a
            timer, it builds a complete environment for deep work, minimizing
            distractions and maximizing concentration. <br /> <br /> Users can
            create custom work and break intervals, track how many sessions they
            complete each day, and review detailed statistics about their focus
            habits over time. The design is minimal and calming, reducing
            cognitive load so you can focus entirely on the task at hand.
            Notifications gently let you know when to pause and when to resume,
            helping you maintain a healthy rhythm between work and rest. <br />
            <br /> A unique feature of this app is the integration of task lists
            with timers. You can assign each task to a specific Pomodoro
            session, making your schedule more structured. The built-in
            analytics show not only how much time you’ve worked but also which
            tasks consumed the most energy. This allows you to reflect on your
            efficiency and adjust your workflow accordingly. The app also
            includes optional background sounds such as white noise, nature
            sounds, or instrumental music to create a distraction-free
            atmosphere. For people who struggle with procrastination, the app
            provides motivational streaks and achievements. Completing multiple
            Pomodoro sessions unlocks milestones, giving a sense of
            accomplishment. This gamified approach makes focusing more engaging
            and less like a chore. Whether you’re studying for exams, coding,
            writing, or handling office work, the app adapts to your routine. By
            combining focus tracking, task management, and motivational tools,
            this Pomodoro app ensures that you not only work harder but also
            smarter. It is a personal trainer for your brain, keeping you
            disciplined, refreshed, and productive throughout the day.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
