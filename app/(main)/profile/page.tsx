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
      {/* User Profile Section */}
      <UserProfileCard />

      {/* Personal Bests */}
      <PersonalBests />

      {/* Typing Activity Chart */}
      <ActivityChart />
      <RecentResults />

      <WPMProgressionChart />
      {/* Recent Results */}

      {/* WPM Progression */}
      <RecentRaces />
    </div>
  );
};

export default ProfilePage;
