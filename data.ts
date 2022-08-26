export async function mainUI()  
{
  const response = await fetch('https://asia-south1-chennai-dashboard.cloudfunctions.net/user/getCoinGameScores');
  const passData = await response.json();
  log(passData[0].PassValue);
// /getCoinGameScores
log(passData)

}
