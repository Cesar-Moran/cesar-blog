import { Moon, Sun } from "lucide-react";

import { Label } from "./ui/label";
import { useTheme } from "./theme-provider";
import ReactSwitch from "react-switch";
import { useState } from "react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  const [checked, setChecked] = useState(false);

  const handleChange = (nextChecked: any) => {
    setChecked(nextChecked);
    setTheme(checked ? "light" : "dark");
  };

  return (
    <div className="flex items-center ">
      <ReactSwitch
        uncheckedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              backgroundColor: "#0E1015",
              fontSize: 10,
            }}
            className="rounded-full"
          >
            <Sun size={20} color="#3b82f6" />
          </div>
        }
        checkedHandleIcon={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
              fontSize: 10,
            }}
            className=" border-2 rounded-full "
          >
            <Moon size={20} color="#3b82f6" />
          </div>
        }
        onChange={handleChange}
        checked={checked ? true : false}
        className="react-switch"
        uncheckedIcon={<></>}
        checkedIcon={<></>}
        offColor="#0E1015"
        onColor="#fff"
      />
    </div>
  );
}
