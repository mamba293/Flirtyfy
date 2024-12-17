import Image from "next/image";
import styles from "./welcome.module.css";
export default function Header() {
  return (
    <header className="py-2">
      <div className="align-left pl-48">
        <div className ="text-6xl font-bold text-pink-700 ">
          <span className="width=100% height=100%">
            <span>
              FLIRTIFY
            </span>
          </span>
        </div>
      </div>      
    </header>
  );
}
