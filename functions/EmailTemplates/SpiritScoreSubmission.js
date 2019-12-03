var tableHTML =
  '<table style="width:100%">' + //Note single quotes on ends
  "<tr><td>Calories</td><td>" +
  calories +
  "</td></tr>" +
  "<tr><td>Calories From Fat</td><td>" +
  caloriesFromFat +
  "</td></tr>" +
  "<tr><td>PolyUnsaturated</td><td>" +
  polyFat +
  "</td></tr>" +
  "</table>";

function SpiritScoreSubmissionTemplate({
  myTeam,
  opponent,
  rules,
  fouls,
  fairness,
  attitude,
  communication,
  total
}) {
  return (
    <table width="100%" style="text-align:center;">
      <thead>
        <tr>
          <td colspan="9" style="padding:1em">
            Table for easy copy and paste into excel/sheets
          </td>
        </tr>
        <tr>
          <td>My Team</td>
          <td>Opponent</td>
          <td>Rules</td>
          <td>Fouls</td>
          <td>Fairness</td>
          <td>Attitude</td>
          <td>Comm.</td>
          <td>Total</td>
          <td>Comments</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="border:1px solid lightgray; padding:1em 0;">
            <strong>{myTeam}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em 0;">
            <strong>{opponent}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{rules}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{fouls}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{fairness}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{attitude}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{communication}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em;">
            <strong>{total}</strong>
          </td>
          <td style="border:1px solid lightgray; padding:1em 0;">
            <strong>{feedback}</strong>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
