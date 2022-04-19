import http from "./https";
const GetUserDetails = () => {
    return http.get("ca/ensf607/vet123/api/users");
};
// const GetSummaryDetails = () => {
//     return http.get("ca/ensf607/vet123/api/summary");
// };
// export default { GetUserDetails, GetSummaryDetails }
export default { GetUserDetails}