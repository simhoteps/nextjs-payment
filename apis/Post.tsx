import { baseUrl } from "@/utils/helpers/BaseUrl";


export const fetchPost = async (datas: any, url: string) => {
  const user: string | null = sessionStorage.getItem("user");
  /*   console.log(url);
  console.log(datas); */
  try {
    if (user !== null) {
      const userData = JSON.parse(user);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Token ${userData.token}`);
      const data = await fetch(`${baseUrl}${url}`, {
        method: "POST",
        headers: myHeaders,
        body: JSON.stringify(datas),
        redirect: "follow",
      })
        .then((response) => {
          response.json();
        })
        .catch((error) => {
          console.log(error);
        });
      return data;
    }
  } catch (error) {}
};
