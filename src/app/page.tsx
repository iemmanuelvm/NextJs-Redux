"use client";

import { AuthUpdater } from "./components/AuthUpdater";
import { AuthViewer } from "./components/AuthViewer ";
import ReduxProvider from "./store/redux-provide";

export default function Home() {
  return (
    <ReduxProvider>
      <main className="w-full h-screen grid grid-cols-2 place-items-center">
        <AuthUpdater />
        <AuthViewer />
      </main>
    </ReduxProvider>
  );
}