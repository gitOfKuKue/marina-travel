# Project Documentation

## M1: JavaScript Functions Explanation

We have selected two key JavaScript/TypeScript functions from your codebase to explain:

### 1. `useBookings` (State Management)

**File:** `src/hook/useBookings.ts`

```typescript
const useBookings = create<BookingStore>((set) => ({
  bookings: BOOKINGS_DATA,
  setBookings: (bookings: any) => set({ bookings }),
}));
```

**Explanation:**
This function uses **Zustand**, a small, fast, and scalable bearbones state-management solution.

- `create<BookingStore>`: Initializes the store.
- `bookings`: Holds the array of booking data (initialized with `BOOKINGS_DATA`).
- `setBookings`: A straightforward action to update the `bookings` state. When called, it merges the new state into the store, triggering re-renders in any components listening to this data (like `BookingClientPage`).

### 2. `getIsActive` (Navigation Logic)

**File:** `src/components/common-components/Navigation.tsx`

```typescript
const getIsActive = (menuLink: string) => {
  if (menuLink === "/#services") {
    return pathname === "/" && isServicesActive;
  }
  if (menuLink === "/") {
    return pathname === "/" && !isServicesActive;
  }
  return pathname.startsWith(menuLink);
};
```

**Explanation:**
This helper function determines if a navigation menu item should be highlighted as "active".

- It checks specific conditions for the implementation of single-page scroll sections (like `#services`).
- If the link is for Services, it checks if we are on the home page AND if the user has scrolled to the services section (`isServicesActive`).
- It ensures the "Home" link is only active when NOT in the services section.
- For other pages (like `/about`, `/booking`), it uses standard path matching (`startsWith`).

---

## M2: Meta Tag Content (SEO)

We have added the following meta tags to `app/layout.tsx` to enhance searchability and SEO.

### Added Content:

```typescript
authors: [{ name: "Marina Travel Team" }],
robots: {
  index: true,
  follow: true,
},
```

### Meaning & Purpose:

1.  **`authors`**: Identifies the creators or owners of the website content. reliable authorship signals can indirectly improve trust and ranking.
2.  **`robots`**:
    - `index: true`: Tells search engines (Google, Bing) to include this page in their search results.
    - `follow: true`: Tells search engines to follow links on this page to discover other pages on your site.

---

## M3: Source Code Management Guide

### GitHub Desktop (GUI)

1.  **Commit**:
    - Make changes to your files.
    - Open GitHub Desktop. You will see changed files in the left panel.
    - Type a summary in the "Summary" box (required) and a description (optional).
    - Click **Commit to main** (or your current branch).
2.  **Push**:
    - After committing, click the **Push origin** button in the top toolbar to send your changes to GitHub Online.
3.  **Pull**:
    - Click the **Fetch origin** button to check for new changes.
    - If there are upgrades, the button changes to **Pull origin**. Click it to download updates to your local machine.

### GitHub Online

- **View History**: Click "Commits" to see the history of changes.
- **Edit Files**: You can edit files directly by clicking the pencil icon, but it's recommended to work locally for complex projects.
- **Pull Requests**: Use this to review code from other branches before merging into the main branch.

---

## M4: Web Page Screenshots and Annotation

### Home Page

![Home Page Screenshot](/Users/kukue/.gemini/antigravity/brain/c183862b-f050-4dde-984b-20f75739faef/home_page_after_load_1765294694449.png)
_Annotated View:_

- **Header/Menu**: Contains Logo and Navigation links (Home, About, Services, etc.). Controlled by `Navigation.tsx`.
- **Hero Section**: Main visual entry point (handled by `page.tsx`).

---

## M5: Menu/Header/Footer Synchronization

**Verification Steps:**

1.  **Codebase Check**:
    - `app/(main)/layout.tsx` wraps all main pages (`about`, `booking`, `contact`, `services`, etc.).
    - It explicitly includes `<Navigation />` at the top and `<Footer />` at the bottom.
2.  ** Synchronization**:
    - Changes made to `src/components/common-components/Navigation.tsx` will immediately reflect across ALL pages because they all share the same layout component.
    - Similarly, editing `Footer.tsx` updates the footer globally.

**Debugger Feature**:

- Using the **React Developer Tools** (Debugger), you can inspect the component tree.
- You will see:
  ```
  RootLayout
    BodyLayout
      MainLayout
        Navigation
        BodyLayout (Nested)
          Page Content
        Footer
  ```
- This hierarchy confirms that Navigation and Footer are loaded once in the layout, ensuring perfect synchronization.
