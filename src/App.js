import React from "react";
import "./App.css";
import Header from "./components/Header";
import Social from "./components/Social";
import data from "./data/data.json";
import Chips from "./components/Chips";
import Section from "./components/Section";
import Post from "./components/Post";
import List from "./components/List";
import TwoMiniPost from "./components/TwoMiniPost";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Social profiles={data.social_profiles} />

      <div className="App-two-panel">
        <div className="App-left-panel">
          <Section title="Work Experience">
            {
              data?.work_experience?.map(exp => (
                <Post
                  title={exp?.title}
                  subtitle={exp?.company}
                  location={exp?.location}
                  dateRange={exp?.date}
                >
                  <List
                    style={{ padding: '10px 0 0 0' }}
                    subtitle="Previous titles -"
                    items={exp?.previous_titles}
                  />
                </Post>
              ))
            }
          </Section>
          <Section title="Projects">
            {data.projects.map(project => (
              <List
                title={project.title}
                items={project.tasks}
                key={project.title}
              />
            ))}
          </Section>
        </div>
        <div className="App-right-panel">
          <Section title="Education">
            <Post
              title={`${data.education.degree} in ${data.education.specialization}`}
              subtitle={`${data.education.college} (${data.education.university})`}
              location={data.education.location}
              dateRange={data.education.date}
            />
          </Section>
          <Section title="Technical Skills">
            <Chips list={data.technical_skills} />
          </Section>
          <Section title="Certifications">
            <List title={data.certifications[0]} />
          </Section>
          <Section title="Languages">
            <TwoMiniPost list={data.languages} />
          </Section>
          <Section title="Interests">
            <Chips list={data.interests} />
          </Section>
          <Section title="Summary">
            <List items={data.summary} />
          </Section>
        </div>
      </div>
    </div>
  );
}
