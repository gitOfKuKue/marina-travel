"use client";

import Container from "@/src/components/common-components/Container";
import React, { useState } from "react";

const MiniGamePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    dob: "",
    gender: "",
  });

  const [answers, setAnswers] = useState<
    Array<{ questionId: number; question: string; answer: string }>
  >([]);

  const handleUserInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleAnswerSelect = (
    questionId: number,
    question: string,
    answer: string
  ) => {
    setAnswers((prev) => {
      const existing = prev.find((item) => item.questionId === questionId);
      if (existing) {
        return prev.map((item) =>
          item.questionId === questionId ? { ...item, answer } : item
        );
      }
      return [...prev, { questionId, question, answer }];
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ userInfo, answers });
  };

  const getRecommendation = () => {
    let scores = {
      beach: 0,
      mountain: 0,
      city: 0,
      culture: 0,
    };

    answers.forEach((item) => {
      const text = item.answer.toLowerCase();
      if (
        text.includes("ocean") ||
        text.includes("sunbed") ||
        text.includes("tropical")
      )
        scores.beach++;
      if (
        text.includes("mountain") ||
        text.includes("hiking") ||
        text.includes("nature") ||
        text.includes("mist")
      )
        scores.mountain++;
      if (
        text.includes("city") ||
        text.includes("shopping") ||
        text.includes("bustling") ||
        text.includes("high-rise")
      )
        scores.city++;
      if (
        text.includes("culture") ||
        text.includes("museums") ||
        text.includes("history") ||
        text.includes("village") ||
        text.includes("ruins")
      )
        scores.culture++;
    });

    const maxScore = Math.max(
      scores.beach,
      scores.mountain,
      scores.city,
      scores.culture
    );

    if (maxScore === scores.beach)
      return {
        place: "The Maldives",
        desc: "A tropical paradise with crystal clear waters, perfect for relaxation.",
      };
    if (maxScore === scores.mountain)
      return {
        place: "The Swiss Alps",
        desc: "Breathtaking mountain views and fresh nature air for your adventures.",
      };
    if (maxScore === scores.city)
      return {
        place: "New York City",
        desc: "The city that never sleeps, offering endless shopping and excitement.",
      };
    if (maxScore === scores.culture)
      return {
        place: "Kyoto, Japan",
        desc: "Immerse yourself in ancient history, temples, and traditional culture.",
      };

    return {
      place: "Mystery Destination",
      desc: "Your eclectic tastes suggest a unique, off-the-beaten-path adventure!",
    };
  };
  const questionSets = [
    {
      question: "What is your ideal view for a relaxing morning?",
      options: [
        "Sunrise over the crystal-clear ocean",
        "Mist rolling over lush green mountains",
        "A bustling city skyline from a high-rise",
        "A peaceful garden in a historic village",
      ],
    },
    {
      question: "How do you prefer to spend your days?",
      options: [
        "Lying on a sunbed with a cocktail",
        "Hiking challenging trails and exploring nature",
        "Visiting museums and ancient ruins",
        "Shopping at high-end boutiques and dining out",
      ],
    },
    {
      question: "What is your preferred climate?",
      options: [
        "Hot and sunny tropical weather",
        "Cool, crisp mountain air",
        "Mild and pleasant mediterranean breeze",
        "Snowy and cozy winter wonderland",
      ],
    },
    {
      question: "What is the most important part of your trip?",
      options: [
        "Total relaxation and spa treatments",
        "Adrenaline-pumping adventures",
        "Immersing in local culture and history",
        "Culinary experiences and food tours",
      ],
    },
    {
      question: "Who are you traveling with?",
      options: [
        "Solo soul-searching trip",
        "Romantic getaway with a partner",
        "Fun-filled vacation with family",
        "Exciting journey with friends",
      ],
    },
  ];

  return (
    <section className="mb-50">
      <Container>
        <div className="text-center py-20 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary mb-6 drop-shadow-sm">
            Unlock Your Next Adventure
          </h1>
          <p className="text-xl text-secondary-font font-medium leading-relaxed">
            Ready to test your luck? Play our mini-game to win exclusive travel
            discounts and let{" "}
            <span className="text-primary font-bold">Marina Agent</span> predict
            your perfect dream destination. Your journey begins here!
          </p>
        </div>

        {answers.length === questionSets.length &&
        userInfo.name &&
        userInfo.dob &&
        userInfo.gender ? (
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h2 className="text-3xl font-bold mb-6 text-center text-slate-800 dark:text-slate-100">
              Your Profile Summary
            </h2>

            <div className="mb-8 p-6 bg-slate-50 dark:bg-slate-900 rounded-xl space-y-4">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b border-slate-200 dark:border-slate-700 pb-2">
                Personal Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 block">
                    Name
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white text-lg">
                    {userInfo.name}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 block">
                    Date of Birth
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white text-lg">
                    {userInfo.dob}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-slate-500 dark:text-slate-400 block">
                    Gender
                  </span>
                  <span className="font-medium text-slate-900 dark:text-white text-lg capitalize">
                    {userInfo.gender}
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 border-b border-slate-200 dark:border-slate-700 pb-2">
                Your Preferences
              </h3>
              {answers.map((ans, idx) => (
                <div
                  key={idx}
                  className="bg-slate-50 dark:bg-slate-900 p-4 rounded-xl"
                >
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">
                    {ans.question}
                  </p>
                  <p className="font-medium text-primary text-lg">
                    {ans.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center bg-primary/5 p-6 rounded-2xl border border-primary/10">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">
                We Recommend
              </h3>
              <p className="text-4xl font-extrabold text-primary mb-3">
                {getRecommendation().place}
              </p>
              <p className="text-slate-600 dark:text-slate-300 italic text-lg">
                "{getRecommendation().desc}"
              </p>
              <div className="mt-6">
                <p className="text-sm text-slate-500">
                  Our agent will contact you shortly at{" "}
                  <span className="font-semibold">{userInfo.name}</span> to
                  finalize your trip to {getRecommendation().place}!
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 dark:bg-slate-800 dark:border-slate-700 mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 mb-10">
              <h2 className="text-3xl font-bold mb-2 text-center text-slate-800 dark:text-slate-100">
                Let's get started!
              </h2>
              <p className="text-center text-slate-700 dark:text-slate-300 mb-8">
                Tell us a bit about yourself so we can personalize your
                experience.
              </p>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={userInfo.name}
                    onChange={handleUserInfoChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={userInfo.dob}
                    onChange={handleUserInfoChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-900 dark:text-white">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={userInfo.gender}
                    onChange={handleUserInfoChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all bg-slate-50 dark:bg-slate-900 dark:border-slate-600 text-slate-900 dark:text-white cursor-pointer"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </form>
            </div>
            <div>
              {/* Question Sets */}
              {questionSets.map((questionSet, index) => (
                <GameQuestionCard
                  key={index}
                  questionSet={questionSet}
                  questionId={index}
                  onAnswer={handleAnswerSelect}
                />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};

const GameQuestionCard = ({
  questionSet,
  questionId,
  onAnswer,
}: {
  questionSet: { question: string; options: string[] };
  questionId: number;
  onAnswer: (questionId: number, question: string, answer: string) => void;
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 dark:bg-slate-800 dark:border-slate-700 mb-8">
      <h2 className="text-xl md:text-2xl font-bold mb-6 text-slate-800 dark:text-slate-100">
        {questionId + 1}. {questionSet.question}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {questionSet.options.map((option, index) => (
          <label
            key={index}
            className="relative flex items-center p-4 rounded-xl border-2 border-slate-100 cursor-pointer transition-all duration-200 hover:border-primary/50 hover:bg-primary/5 dark:border-slate-700 dark:hover:border-primary/50 has-[:checked]:border-primary has-[:checked]:bg-primary/10 has-[:checked]:shadow-md"
          >
            <input
              type="radio"
              name={`question-${questionId}`}
              value={option}
              className="peer sr-only"
              onChange={() =>
                onAnswer(questionId, questionSet.question, option)
              }
            />
            <div className="flex items-center gap-3 w-full">
              <span className="text-base font-medium text-slate-700 dark:text-slate-200">
                {option}
              </span>
            </div>

            <div className="absolute inset-0 rounded-xl ring-2 ring-transparent peer-focus-visible:ring-primary/50 transition-all pointer-events-none" />
          </label>
        ))}
      </div>
    </div>
  );
};

export default MiniGamePage;
