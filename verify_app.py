from playwright.sync_api import sync_playwright
import time

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(viewport={'width': 1280, 'height': 800})
        page = context.new_page()

        try:
            # 1. Visit Home
            print("Navigating to Home...")
            page.goto("http://localhost:3000")
            page.wait_for_timeout(2000)
            page.screenshot(path="verification_home.png")

            # 2. Visit Shop
            print("Navigating to Shop...")
            page.click("text=Shop")
            page.wait_for_timeout(2000)
            page.screenshot(path="verification_shop.png")

            # 3. Add to Cart
            print("Adding to Cart...")
            # Find the first "Add to Cart" button
            page.locator("button:has-text('Add to Cart')").first.click()
            page.wait_for_timeout(2000) # Wait for sidebar to open automatically
            page.screenshot(path="verification_cart_auto_open.png")

            # 4. Verify Sidebar Open
            if page.is_visible("text=Your Cart"):
                print("Sidebar opened automatically.")
            else:
                print("Sidebar did not open automatically.")
                # Try to open it manually
                page.click("button:has-text('cart(')")
                page.wait_for_timeout(1000)

            # Close sidebar by clicking outside (top left)
            print("Closing sidebar...")
            page.mouse.click(10, 10)
            page.wait_for_timeout(1000)

            # 5. Visit Blog
            print("Navigating to Blog...")
            page.click("text=Blog")
            page.wait_for_timeout(2000)
            page.screenshot(path="verification_blog.png")

            # 6. Visit Blog Post
            print("Navigating to Blog Post...")
            # Click the first Read Article link or post title
            # Use 'text=Read Article' or finding the first link in the grid
            page.locator("text=Read Article").first.click()
            page.wait_for_timeout(2000)
            page.screenshot(path="verification_blog_post.png")

        except Exception as e:
            print(f"Error: {e}")
            page.screenshot(path="verification_error.png")

        finally:
            browser.close()

if __name__ == "__main__":
    run()
