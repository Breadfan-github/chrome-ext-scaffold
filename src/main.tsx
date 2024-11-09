import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./chrome-extension/global.css";
import { Button } from "./components/ui/button";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-white w-[375px] h-[650px]">
      <div className="text-5xl p-10 font-extrabold">
        <Button>hello</Button>
      </div>
    </div>
  </StrictMode>
);
