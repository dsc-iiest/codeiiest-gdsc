const calculateTopCoders = async (data) => {
  if(!data) return []
  let year1MaxRatin = 0,
    year1TopCoder = "",
    year2MaxRatin = 0,
    year2TopCoder = "",
    year3MaxRatin = 0,
    year3TopCoder = "",
    year4MaxRatin = 0,
    year4TopCoder = "";

  let year1highestRating = 0,
    year2highestRating = 0,
    year3highestRating = 0,
    year4highestRating = 0;
  let year1TcName = "",
    year2TcName = "",
    year3TcName = "",
    year4TcName = "";
  let year1Av = "",
    year2Av = "",
    year3Av = "",
    year4Av = "";

  for (const user of data) {
    const { rating, handle, year, maxrating, name, avatar } = user;
    switch (year) {
      case 1:
        if (rating > year1MaxRatin) {
          year1MaxRatin = rating;
          year1TopCoder = handle;
          year1highestRating = maxrating;
          year1TcName = name;
          year1Av = avatar;
          break;
        }
      case 2:
        if (rating > year2MaxRatin) {
          year2MaxRatin = rating;
          year2TopCoder = handle;
          year2highestRating = maxrating;
          year2TcName = name;
          year2Av = avatar;
          break;
        }
      case 3:
        if (rating > year3MaxRatin) {
          year3MaxRatin = rating;
          year3TopCoder = handle;
          year3highestRating = maxrating;
          year3TcName = name;
          year3Av = avatar;
          break;
        }
      case 4:
        if (rating > year4MaxRatin) {
          year4MaxRatin = rating;
          year4TopCoder = handle;
          year4highestRating = maxrating;
          year4TcName = name;
          year4Av = avatar;
        }
    }
  }

  const topCoderYearWise = [
    {
      year: 1,
      handle: year1TopCoder,
      rating: year1MaxRatin,
      highestRating: year1highestRating,
      name: year1TcName,
      experience: "Fresher",
      avatar: year1Av,
    },
    {
      year: 2,
      handle: year2TopCoder,
      rating: year2MaxRatin,
      highestRating: year2highestRating,
      name: year2TcName,
      experience: "Sophomore",
      avatar: year2Av,
    },
    {
      year: 3,
      handle: year3TopCoder,
      rating: year3MaxRatin,
      highestRating: year3highestRating,
      name: year3TcName,
      experience: "Junior",
      avatar: year3Av,
    },
    {
      year: 4,
      handle: year4TopCoder,
      rating: year4MaxRatin,
      highestRating: year4highestRating,
      name: year4TcName,
      experience: "Senior",
      avatar: year4Av,
    },
  ];

  for (const coder of topCoderYearWise) {
    const { handle } = coder;
    console.log(handle);
    const response = await fetch(
      `https://codeforces.com/api/user.rating?handle=${handle}`
    );
    const resData = await response.json();
    const contestsGiven = resData.result.length;
    const latestContest = resData.result[contestsGiven - 1];
    const ratingChange = latestContest.newRating - latestContest.oldRating;
    coder.changeInRating = ratingChange;
    coder.contestsGiven = contestsGiven;
  }
  console.log(topCoderYearWise);
  return topCoderYearWise;
};

export {calculateTopCoders}