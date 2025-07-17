---
layout: default
title: chara.vault
permalink: /
---

<header>
  <h1>chara.<span class="vault">vault</span></h1>
  <p>A place to store your characters ✨</p>

  <div class="btn-container">
    <a href="/trending/" class="btn">Check out site</a>
    <a href="/login/" class="btn">Login</a>
    <a href="/register/" class="btn">Register</a>
  </div>
</header>

<main>
  <section class="character-card">
    <h2>💫 Example Character</h2>
    <img src="https://placekitten.com/200/200" alt="Character" />
    <p><strong>Name:</strong> Cookie</p>
    <p><strong>Description:</strong> A very magical cat who eats dreams.</p>
  </section>
</main>

<footer>
  <p>&copy; 2025 chara.vault</p>
</footer>

<style>
  /* Buttons container under header */
  .btn-container {
    margin-top: 1rem;
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
  }
  .btn {
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: background 0.25s ease;
  }
  .btn:hover {
    background: #2563eb;
  }
  header h1 {
    font-weight: 700;
    font-size: 2.5rem;
    margin-bottom: 0;
  }
  header p {
    margin-top: 0.25rem;
    font-size: 1.1rem;
    color: #555;
  }
</style>

