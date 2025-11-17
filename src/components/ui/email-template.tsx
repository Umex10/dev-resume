import { formSchema } from '@/lib/formSchema';
import z from 'zod';

type FormValues = z.infer<typeof formSchema>;


export default function EmailTemplate({ fullName, email, number, message }: FormValues) {
  return (
    <div
      style={{
        backgroundColor: "#0f0f0f",
        padding: "24px",
        fontFamily:
          "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        color: "#e5e5e5",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          border: "1px solid #1f1f1f",
          borderRadius: "12px",
          background: "#141414",
          padding: "24px",
        }}
      >
        <h2
          style={{
            color: "#10b981",
            margin: "0 0 16px 0",
            fontSize: "22px",
          }}
        >
          📬 New Message — Dev Resume
        </h2>

        <p style={{ color: "#c5c5c5", marginBottom: "24px" }}>
          You received a new message from the Dev Resume contact form.
        </p>

        <div
          style={{
            background: "#1b1b1b",
            padding: "16px",
            borderRadius: "10px",
            border: "1px solid #232323",
          }}
        >
          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: "#10b981" }}>Name:</strong><br />
            {fullName}
          </p>

          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: "#10b981" }}>Email:</strong><br />
            {email}
          </p>

          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: "#10b981" }}>Phone:</strong><br />
            {number}
          </p>

          <p style={{ margin: "0 0 12px" }}>
            <strong style={{ color: "#10b981" }}>Message:</strong><br />
            {message}
          </p>
        </div>

        <p
          style={{
            color: "#6b6b6b",
            fontSize: "12px",
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          Sent from the Dev Resume contact form.
        </p>
      </div>
    </div>
  );
}