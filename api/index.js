export default async function handler(req, res) {
  res.status(200).json({
    message: "Welcome to Kingstream — your private media dashboard!",
    note: "Real-Debrid and Plex integration pending login."
  });
}
