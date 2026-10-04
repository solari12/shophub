# ShopHub customer authentication flow

Phase 2 applies the Phase 1 component contract in `MASTER.md` and `components.md`. The screens use the existing semantic colors, typography, focus ring, button/input classes, spacing scale, card radius, and restrained shadows. This extends the ShopHub system; it does not define a second theme.

## Screens and transitions

```text
/auth/login
├── /auth/forgot-password
│   └── /auth/reset-password?token=…
└── /auth/register
    └── /auth/verify-email
        └── Continue to ShopHub → /auth/login (until the customer home phase exists)
```

| Route | Main state | Alternate states and recovery |
|---|---|---|
| `/auth/login` | Email, password, remember me | Inline required/format errors; show/hide password; loading; prototype completion feedback; forgot-password and register links |
| `/auth/register` | Name, email, optional phone, password, confirmation | Inline errors and focusable summary; live requirements/strength; loading; prototype-created state; continue to verification |
| `/auth/forgot-password` | Email request | Invalid email; loading; neutral account-enumeration-safe confirmation; valid-reset preview link; return to login |
| `/auth/reset-password` | Invalid/expired by default; add a token query value to preview the form | Token presence check for UI preview only; password rules/match errors; loading; update-complete preview; request new link; login |
| `/auth/verify-email` | Waiting state with a masked address when registration supplied one | Resend loading/success; rate-limit presentation on repeat; `?status=verified` success preview; `?status=failed` recovery preview |

## Interaction and security notes

- Email and password fields have visible labels, correct autocomplete hints, paste support, and no browser validation bubbles replacing inline messages.
- Fields validate on blur after first interaction and on submit. Failed submission presents a focusable linked error summary as well as inline messages; focus is not moved while the user is tabbing through fields.
- Password requirements in this UI follow the brief’s example (8+ characters, uppercase letter, number, special character). Confirm the production policy with the authentication service before connecting it.
- Reset tokens, sessions, email delivery, account creation, password updates, existing-account detection, and actual rate limits must be verified/enforced by the server. Query-string token presence is only a visual preview gate and is not authorization.
- No password is written to storage. Registration temporarily retains only the email in `sessionStorage` to display its masked form on the verification preview. Password fields are cleared by normal route changes.
- The forms intentionally do not call an API. The shared page footer labels the prototype and says account details are not sent to an auth service. Preview success text is not evidence of an account change or email delivery.
- A Google sign-in button is omitted until an OAuth provider is selected and configured; the screen keeps one clear primary action.

## Production integration contract

Connect the submit handlers to the authentication service without changing the field or feedback presentation. Keep login failures neutral (“Email or password isn’t correct”), keep password-reset requests neutral whether or not the address exists, rate-limit resend/reset endpoints server-side, use one-time expiring reset/verification tokens, and establish sessions with secure server-managed cookies. Never trust form validation or token checks performed only by the browser.
