export const emailContent = (
  fullname: string,
  email: string,
  phoneNumber: string,
  organisation: string,
  message: string,
) => {
  return {
    subject: "New Partnership/Sponsorship Alert",
    htmlContent: `
          <div>
            <div class="header">
            <h2>New Sponsorship Interest Alert</h2>
            </div>
            <div class="content">
            <p>Hello MedplusCares,</p>
            <p>You have received a new sponsorship interest through the website. Here are the details:</p>
            <ul>
                <li><strong>Full Name:</strong> ${fullname}</li>
                <li><strong>Organization:</strong> ${organisation}</li>
                <li><strong>Phone Number:</strong> ${phoneNumber}</li>
                <li><strong>Email Address:</strong> ${email}</li>
                <li><strong>Message:</strong> ${message}</li>
            </ul>
            <p>Please follow up with this potential sponsor to explore opportunities for collaboration.</p>
            <p>Best regards,<br>Devteam</p>
            </div>
            <div class="footer">
            <p>&copy; ${new Date().getFullYear()} Medplus. All rights reserved.</p>
            </div>
          </div>
      `,
  };
};
