import type { Express } from "express";
import { storage } from "./storage";

export function setupAuthRoutes(app: Express) {
  // Login endpoint
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      if (!username || !password) {
        return res.status(400).json({ 
          success: false, 
          message: "Username and password are required" 
        });
      }

      // Find user by username
      const user = await storage.getUserByUsername(username);
      if (!user) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid username or password" 
        });
      }

      // In production, you'd verify hashed password
      // For now, simple password check
      if (user.password !== password) {
        return res.status(401).json({ 
          success: false, 
          message: "Invalid username or password" 
        });
      }

      // Remove password from response
      const { password: _, ...userWithoutPassword } = user;
      
      res.json({ 
        success: true, 
        user: userWithoutPassword,
        message: "Login successful" 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Register endpoint
  app.post("/api/auth/register", async (req, res) => {
    try {
      const userData = req.body;
      
      if (!userData.username || !userData.password || !userData.email) {
        return res.status(400).json({ 
          success: false, 
          message: "Username, password, and email are required" 
        });
      }

      // Check if username already exists
      const existingUser = await storage.getUserByUsername(userData.username);
      if (existingUser) {
        return res.status(409).json({ 
          success: false, 
          message: "Username already exists" 
        });
      }

      // Create new user
      const newUser = await storage.createUser(userData);
      
      // Remove password from response
      const { password: _, ...userWithoutPassword } = newUser;
      
      res.status(201).json({ 
        success: true, 
        user: userWithoutPassword,
        message: "Registration successful" 
      });
    } catch (error: any) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  // Logout endpoint
  app.post("/api/auth/logout", async (req, res) => {
    res.json({ 
      success: true, 
      message: "Logout successful" 
    });
  });

  // Get current user endpoint
  app.get("/api/auth/user", async (req, res) => {
    // This would typically check session/token
    // For now, return success for authenticated users
    res.json({ 
      success: true, 
      message: "User authenticated" 
    });
  });
}