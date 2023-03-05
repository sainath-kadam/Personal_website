import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Achievement.css";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeContext } from "../../contexts/ThemeContext";
import { achievementData } from "../../data/achievementData";
import AchievementCard from "./AchievementCard";
import { HiArrowRight } from "react-icons/hi";
function Achievement() {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      {achievementData.achievements.length > 0 && (
        <div
          className="achievement"
          id="achievement"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="achievement-body">
            <h1 style={{ color: theme.primary }}>Achievements</h1>
            <h4 style={{ color: theme.tertiary }}>{achievementData.bio}</h4>
          </div>
          <div className="achievement-cards">
            {achievementData.achievements.slice(0, 5).map((achieve) => (
              <AchievementCard
                key={achieve.id}
                id={achieve.id}
                title={achieve.title}
                details={achieve.details}
                date={achieve.date}
                field={achieve.field}
                image={achieve.image}
              />
            ))}
          </div>
          {achievementData.length > 3 && (
            <div className="projects--viewAll">
              <Link to="#">
                <button class="favorite styled" type="button">
                  Add to favorites
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Achievement;
