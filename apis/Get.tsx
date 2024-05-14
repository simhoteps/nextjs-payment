import { baseUrl } from "@/utils/helpers/BaseUrl";

const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6IjY2M2UyNDgxMjQ5M2UwZTgxYjNmNGFmMSIsImVtYWlsIjoiaGF5YXR6dWhhbEBnbWFpbC5jb20iLCJjb2RlIjoiU0tRUi02NSIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzE1NDM3Mzc0LCJleHAiOjE3MTU0NDA5NzR9.HIllZNZUQJvIXdYLbLk9kDex96KUEy7JX_qTVpcFieg";


export const fetchGet = async (url: string) => {
  const user: string | null = sessionStorage.getItem("user");
  try {
    if (user !== null) {
      const userData = JSON.parse(user);
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Authorization", `Token ${token}`);
      const data = await fetch(`${baseUrl}${url}`, {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      })
        .then((response) => response.json())
        .catch((error) => {
          console.log(error);
        });

      return data;
    }
  } catch (error) {}
};
