# Email setup: info@binmahyub.uk

- **Goal:** mail to **info@binmahyub.uk** arrives in your Gmail (receiving), and later you can reply *from* info@binmahyub.uk (sending).
- **Status (2026-09-24):**
  - **Receiving: done.** Checked live: binmahyub.uk has Cloudflare's three mail (MX) records and its sender (SPF) record.
  - **Sending: not set up yet** (Part B).
- **Note:** the menu names come from general knowledge, not a live check. Cloudflare and Brevo sometimes rename menus. If a label doesn't match, look for the nearest equivalent.

---

## Part A: Receiving (Cloudflare Email Routing)

1. Log in at **dash.cloudflare.com**.
2. Click the domain **binmahyub.uk**.
3. In the left menu, open **Email**, then **Email Routing**.
4. Click **Get started** (or **Enable Email Routing**).
5. If asked to add DNS records, click **Add records and enable**.
6. Open the **Destination addresses** tab.
7. Add your Gmail address.
8. Open the verification email in Gmail and click the link.
9. Open the **Routing rules** tab.
10. Click **Create address**.
11. Type **info** as the custom address.
12. Set the action to **Send to an email**.
13. Pick your Gmail as the destination.
14. Click **Save**.
15. From a *different* email account, send a test to **info@binmahyub.uk**.
16. Check that it arrives in Gmail.

### If the test bounces ("address not found")

Check one thing at a time:

1. **The spelling is `binmahyub` with an "i".** `bunmahyub.uk` doesn't exist; this was the cause of the first bounce on 2026-09-24.
2. **The destination Gmail shows "Verified"** under Destination addresses. If it says "Pending", click the link in the verification email.
3. **The routing rule reads exactly `info@binmahyub.uk`** and is **Active**.
4. **Email Routing shows "Enabled"** and its DNS records show as configured.
5. **The DNS tab has no other MX records** left over from another email provider.
6. **The DNS is live.** Check it from a terminal (it should list `route1/2/3.mx.cloudflare.net`):
   ```
   curl -s -H 'accept: application/dns-json' "https://cloudflare-dns.com/dns-query?name=binmahyub.uk&type=MX"
   ```
7. **Wait 10 minutes and retest.** This only matters right after enabling, while other mail servers still hold old DNS answers.

---

## Part B: Sending as info@binmahyub.uk (for later)

Cloudflare Email Routing **only receives**. To send *from* info@binmahyub.uk inside Gmail, you need a sending (SMTP) service. **Brevo** has a free plan that works with Gmail's "Send mail as". Check its current limits at signup.

### B1: Set up Brevo

1. Create a free account at **brevo.com**.
2. In Brevo, open **Senders, Domains & Dedicated IPs**.
3. Open **Domains**.
4. Click **Add a domain**.
5. Enter **binmahyub.uk**.
6. Brevo shows a list of DNS records to add. Keep that page open.

### B2: Add Brevo's records in Cloudflare

7. In a new tab, open **dash.cloudflare.com → binmahyub.uk → DNS → Records**.
8. Add each record Brevo lists, **exactly** as shown: same type, name and value.
9. For any **CNAME** record, set the proxy to **DNS only** (grey cloud).
10. **Don't add a second SPF record.** Find the existing TXT record `v=spf1 include:_spf.mx.cloudflare.net ~all`.
11. Edit that one record so it becomes:
    ```
    v=spf1 include:_spf.mx.cloudflare.net include:spf.brevo.com ~all
    ```
    (A domain may have only one SPF record. Two break both. Use the include value Brevo shows if it differs.)
12. Save.
13. Back in Brevo, click **Verify** (or **Authenticate**).
14. Wait until Brevo shows the domain as authenticated. This can take a few minutes.

### B3: Get your SMTP login from Brevo

15. In Brevo, open **SMTP & API**.
16. Open the **SMTP** tab.
17. Note the **server** (e.g. `smtp-relay.brevo.com`), the **port** (587) and your **login**.
18. Click **Generate a new SMTP key**.
19. Copy the key somewhere safe. It's shown once.

### B4: Connect Gmail

20. In Gmail, click the **gear → See all settings**.
21. Open **Accounts and Import**.
22. Under **Send mail as**, click **Add another email address**.
23. Name: **Bin Mahyub**.
24. Email: **info@binmahyub.uk**.
25. Keep **Treat as an alias** ticked.
26. Click **Next step**.
27. SMTP server: the Brevo server from step 17.
28. Port: **587**.
29. Username: your Brevo SMTP login.
30. Password: the SMTP key from step 19.
31. Choose **Secured connection using TLS**.
32. Click **Add account**.
33. Gmail sends a confirmation code to info@binmahyub.uk. It lands in your Gmail through Part A.
34. Enter the code.

### B5: Test

35. Compose a new email in Gmail.
36. Set **From** to **info@binmahyub.uk**.
37. Send it to a different account you own.
38. Check that it arrives, and that it's **not in spam**.
39. Optional: in Gmail's **Accounts and Import**, make info@binmahyub.uk the **default** From address.

### Optional: DMARC (improves deliverability)

40. In Cloudflare DNS, add a **TXT** record named **`_dmarc`** with the value:
    ```
    v=DMARC1; p=none; rua=mailto:info@binmahyub.uk
    ```
