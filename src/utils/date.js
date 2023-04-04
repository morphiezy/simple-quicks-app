const date = {
  chat: {
    fulltime: (time) => {
      const date = new Date(time);

      const day = ("0" + date.getDate()).slice(-2);
      const month = ("0" + (date.getMonth() + 1)).slice(-2);
      const year = date.getFullYear();
      const hours = ("0" + date.getHours()).slice(-2);
      const minutes = ("0" + date.getMinutes()).slice(-2);

      return `${day}/${month}/${year} ${hours}:${minutes}`;
    },
    time: (time) => {
      const date = new Date(time);

      const hours = date.getUTCHours();
      const minutes = date.getUTCMinutes();

      const formattedTime = `${hours.toString().padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}`;

      return formattedTime;
    },
    getTime: () => {
      const date = new Date();
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const day = String(date.getDate()).padStart(2, "0");
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");
      const seconds = String(date.getSeconds()).padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;

      return formattedDate;
    },
  },
  task: {
    deadline: (time) => {
      
      const date = new Date(time);
      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    },
    dayLeft: (time) => {
      const deadline = new Date(time);
      const today = new Date();
      const timeDiff = deadline.getTime() - today.getTime();
      const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

      return `${daysLeft} Days Left`;
    },
  },
};

export default date;
