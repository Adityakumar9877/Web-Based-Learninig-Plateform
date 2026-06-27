package com.logic;

import java.io.IOException;
import java.util.Properties;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.*;

import jakarta.mail.*;
import jakarta.mail.internet.*;

@WebServlet("/contact")
public class ContactServlet extends HttpServlet {

	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {

		// 🔹 Form data
		String name = req.getParameter("name");
		String email = req.getParameter("email");
		String message = req.getParameter("message");

		// 🔐 Sender email
		final String fromEmail = "sahilkumar142009@gmail.com";
		final String password = "omijfinijcftzlse";

		// 🔹 SMTP Configuration
		Properties props = new Properties();
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");

		// 🔹 Session create
		Session session = Session.getInstance(props, new Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(fromEmail, password);
			}
		});

		try {
			Message msg = new MimeMessage(session);

			msg.setFrom(new InternetAddress(fromEmail));

			// 👉 Admin email (yaha message jayega)

			msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("adityakumar300005@gmail.com"));

			msg.setSubject("New Contact Message");

			msg.setText("Name: " + name + "\nEmail: " + email + "\nMessage: " + message);

			Transport.send(msg);

			res.getWriter().println("✅ Message Sent Successfully!");

		} catch (Exception e) {
			res.setContentType("text/html");
			res.getWriter().println("Error: " + e.getMessage());
			e.printStackTrace();
		}
	}
}