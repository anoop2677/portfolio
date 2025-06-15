import React, { useState, useEffect } from 'react';

// Component to display age in real-time with precision (years, months, days, hours, minutes, seconds)
const Age = () => {
  const [age, setAge] = useState({});

  const tick = () => {
    const birthTime = new Date('1997-04-07T09:24:00');
    const now = new Date();

    // Calculate the time difference in milliseconds
    const diffMs = now - birthTime;

    // Calculate years
    let years = now.getFullYear() - birthTime.getFullYear();
    const monthDiff = now.getMonth() - birthTime.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthTime.getDate())) {
      years--;
    }

    // Create a date for the same month/day but in the current year
    const lastBirthday = new Date(now.getFullYear(), birthTime.getMonth(), birthTime.getDate(), 
                                 birthTime.getHours(), birthTime.getMinutes(), birthTime.getSeconds());
    if (now < lastBirthday) {
      lastBirthday.setFullYear(lastBirthday.getFullYear() - 1);
    }

    // Calculate the time difference from last birthday
    const diffFromLastBirthday = now - lastBirthday;

    // Calculate months (approximate)
    const months = Math.floor(diffFromLastBirthday / (1000 * 60 * 60 * 24 * 30.436875));

    // Calculate remaining time after months
    const remainingAfterMonths = diffFromLastBirthday - (months * 1000 * 60 * 60 * 24 * 30.436875);

    // Calculate days
    const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));

    // Calculate remaining time after days
    const remainingAfterDays = remainingAfterMonths - (days * 1000 * 60 * 60 * 24);

    // Calculate hours
    const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));

    // Calculate remaining time after hours
    const remainingAfterHours = remainingAfterDays - (hours * 1000 * 60 * 60);

    // Calculate minutes
    const minutes = Math.floor(remainingAfterHours / (1000 * 60));

    // Calculate seconds
    const seconds = Math.floor((remainingAfterHours - (minutes * 1000 * 60)) / 1000);

    setAge({ years, months, days, hours, minutes, seconds });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>{age.years} years, {age.months} months, {age.days} days, {age.hours} hours, {age.minutes} minutes, {age.seconds} seconds</>
  );
};

// Component to display coding time in real-time with precision (years, months, days, hours, minutes, seconds)
const CodingTime = () => {
  const [time, setTime] = useState({});

  const tick = () => {
    // Started coding approximately in 2018
    const startTime = new Date('2018-01-01T00:00:00');
    const now = new Date();

    // Calculate the time difference in milliseconds
    const diffMs = now - startTime;

    // Calculate years
    let years = now.getFullYear() - startTime.getFullYear();
    const monthDiff = now.getMonth() - startTime.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < startTime.getDate())) {
      years--;
    }

    // Create a date for the same month/day but in the current year
    const lastAnniversary = new Date(now.getFullYear(), startTime.getMonth(), startTime.getDate(), 
                                   startTime.getHours(), startTime.getMinutes(), startTime.getSeconds());
    if (now < lastAnniversary) {
      lastAnniversary.setFullYear(lastAnniversary.getFullYear() - 1);
    }

    // Calculate the time difference from last anniversary
    const diffFromLastAnniversary = now - lastAnniversary;

    // Calculate months (approximate)
    const months = Math.floor(diffFromLastAnniversary / (1000 * 60 * 60 * 24 * 30.436875));

    // Calculate remaining time after months
    const remainingAfterMonths = diffFromLastAnniversary - (months * 1000 * 60 * 60 * 24 * 30.436875);

    // Calculate days
    const days = Math.floor(remainingAfterMonths / (1000 * 60 * 60 * 24));

    // Calculate remaining time after days
    const remainingAfterDays = remainingAfterMonths - (days * 1000 * 60 * 60 * 24);

    // Calculate hours
    const hours = Math.floor(remainingAfterDays / (1000 * 60 * 60));

    // Calculate remaining time after hours
    const remainingAfterHours = remainingAfterDays - (hours * 1000 * 60 * 60);

    // Calculate minutes
    const minutes = Math.floor(remainingAfterHours / (1000 * 60));

    // Calculate seconds
    const seconds = Math.floor((remainingAfterHours - (minutes * 1000 * 60)) / 1000);

    setTime({ years, months, days, hours, minutes, seconds });
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>{time.years} years, {time.months} months, {time.days} days, {time.hours} hours, {time.minutes} minutes, {time.seconds} seconds</>
  );
};

const data = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'location',
    label: 'Current location',
    value: 'New Delhi, India',
  },
  {
    key: 'coding',
    label: 'Time coding',
    value: <CodingTime />,
  },
  {
    key: 'experience',
    label: 'Professional experience',
    value: '4+ years',
  },
  {
    key: 'languages',
    label: 'Programming languages',
    value: '6 (Java, JavaScript, Python, SQL, Go, C++)',
  },
  {
    key: 'coffee',
    label: 'Coffee consumed',
    value: 'Too much to count',
  },
  {
    key: 'github',
    label: 'GitHub profile',
    value: 'anoop2677',
    link: 'https://github.com/anoop2677',
  },
];

export default data;
