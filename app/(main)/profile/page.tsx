"use client";

import React from "react";
import {
  AchievementsBadges,
  ActivityChart,
  PersonalBests,
  RecentRaces,
  RecentResults,
  UserProfileCard,
  WPMProgressionChart,
} from "@/components/feature";

const ProfilePage = () => {
  return (
    <div className="container mx-auto py-8 space-y-8">
      <UserProfileCard />
      <PersonalBests />
      <ActivityChart />
      <RecentResults />
      <WPMProgressionChart />
      <RecentRaces />
    </div>
  );
};

export default ProfilePage;
