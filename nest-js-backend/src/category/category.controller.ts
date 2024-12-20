// src/category/category.controller.ts
import { Controller, Post } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // POST endpoint to insert categories into the database
  @Post('insert')
  async insertCategories() {
    const categories = [
      {
        category: 'Dentists',
        subcategories: [
          'General Dentistry',
          'Cosmetic Dentistry',
          'Pediatric Dentistry',
          'Orthodontics (Braces & Aligners)',
          'Periodontics (Gum Care)',
          'Oral Surgery (Implants, Extractions)',
          'Prosthodontics (Dentures, Crowns, Bridges)',
          'Endodontics (Root Canal Treatment)',
          'Holistic Dentistry',
          'Emergency Dental Services',
        ],
      },
      {
        category: 'IT',
        subcategories: [
          {
            name: 'IT Services',
            subcategories: [
              'Network Security',
              'Cloud Computing',
              'Data Analytics',
              'IT Consulting',
              'Managed IT Services',
              'Software Development',
              'Cybersecurity Solutions',
              'IT Infrastructure & Support',
            ],
          },
        ],
      },
      {
        category: 'Banking',
        subcategories: [
          {
            name: 'Banking Services',
            subcategories: [
              'Personal Banking',
              'Corporate Banking',
              'Investment Banking',
              'Mortgage & Home Loans',
              'Wealth Management',
              'Business Loans & Financing',
              'Digital Banking Solutions',
              'Foreign Exchange (Forex)',
              'Mobile Banking Apps',
              'ATM & Branch Services',
            ],
          },
        ],
      },
      {
        category: 'Shopping',
        subcategories: [
          {
            name: 'Apparel & Fashion',
            subcategories: [
              'Men’s Clothing',
              'Women’s Clothing',
              'Kids’ Clothing',
              'Footwear & Accessories',
              'Jewelry & Watches',
            ],
          },
          {
            name: 'Electronics & Gadgets',
            subcategories: [
              'Smartphones & Tablets',
              'Computers & Laptops',
              'Home Appliances',
              'Gaming & Entertainment',
              'Wearables (Smartwatches, Fitness Bands)',
            ],
          },
          {
            name: 'Beauty & Personal Care',
            subcategories: [
              'Skincare',
              'Haircare',
              'Makeup',
              'Fragrances',
              'Personal Grooming Tools',
            ],
          },
          {
            name: 'Groceries & Food',
            subcategories: [
              'Fresh Produce',
              'Packaged Goods',
              'Organic Foods',
              'Beverages',
              'Specialty Diets (Vegan, Gluten-Free)',
            ],
          },
          {
            name: 'Home Goods & Furniture',
            subcategories: [
              'Living Room Furniture',
              'Bedroom Furniture',
              'Kitchen & Dining',
              'Home Decor',
              'Lighting & Fixtures',
            ],
          },
        ],
      },
      {
        category: 'Home Services',
        subcategories: [
          {
            name: 'Cleaning Services',
            subcategories: [
              'Residential Cleaning',
              'Commercial Cleaning',
              'Carpet & Upholstery Cleaning',
              'Window Cleaning',
              'Deep Cleaning & Sanitizing',
            ],
          },
          {
            name: 'Plumbing',
            subcategories: [
              'Pipe Repair & Replacement',
              'Drain Cleaning',
              'Water Heater Installation/Repair',
              'Leak Detection',
              'Sewer Line Services',
            ],
          },
          {
            name: 'Electrical Services',
            subcategories: [
              'Wiring & Rewiring',
              'Electrical Repairs',
              'Lighting Installation',
              'Electrical Panel Upgrades',
              'Smart Home Integration',
            ],
          },
          {
            name: 'HVAC (Heating, Ventilation & Air Conditioning)',
            subcategories: [
              'Air Conditioning Installation/Repair',
              'Heating Systems',
              'Duct Cleaning',
              'Thermostat Installation',
              'Energy Efficiency Services',
            ],
          },
          {
            name: 'Landscaping & Lawn Care',
            subcategories: [
              'Lawn Maintenance',
              'Gardening & Planting',
              'Tree Removal & Pruning',
              'Irrigation Systems',
              'Outdoor Design & Landscaping',
            ],
          },
        ],
      },
      {
        category: 'Active Life',
        subcategories: [
          {
            name: 'Fitness & Gym',
            subcategories: [
              'Personal Training',
              'Group Fitness Classes',
              'Yoga & Pilates',
              'Martial Arts & Boxing',
              'CrossFit',
              'Strength Training',
            ],
          },
          {
            name: 'Outdoor Adventures',
            subcategories: [
              'Hiking & Trekking',
              'Cycling',
              'Rock Climbing',
              'Camping & Survival Training',
              'Fishing & Hunting',
            ],
          },
          {
            name: 'Sports & Recreation',
            subcategories: [
              'Team Sports (Football, Basketball)',
              'Individual Sports (Tennis, Golf)',
              'Water Sports (Swimming, Surfing, Sailing)',
              'Running & Triathlons',
            ],
          },
          {
            name: 'Wellness & Relaxation',
            subcategories: [
              'Spa & Massage Services',
              'Meditation & Mindfulness',
              'Alternative Therapies (Chiropractic, Acupuncture)',
              'Nutrition & Dietary Consultations',
              'Stress Management & Recovery',
            ],
          },
        ],
      },

      {
        category: 'Restaurants',
        subcategories: [
          {
            name: 'Cuisine Type',
            subcategories: [
              'American',
              'Italian',
              'Mexican',
              'Chinese',
              'Indian',
              'Mediterranean',
              'Japanese & Sushi',
              'Fast Food & Casual Dining',
              'Vegan & Vegetarian',
              'Fusion & International',
            ],
          },
          {
            name: 'Dining Experience',
            subcategories: [
              'Fine Dining',
              'Casual Dining',
              'Fast Casual',
              'Cafés & Bistros',
              'Food Trucks & Street Food',
              'Brunch Spots',
            ],
          },
          {
            name: 'Services',
            subcategories: [
              'Delivery & Takeout',
              'Catering Services',
              'Buffet & All-You-Can-Eat',
              'Outdoor Dining/Patio',
              'Kid-Friendly Restaurants',
            ],
          },
        ],
      },
      {
        category: 'Education',
        subcategories: [
          {
            name: 'K-12 Education',
            subcategories: [
              'Public Schools',
              'Private Schools',
              'Charter Schools',
              'Special Education Services',
              'Online Learning Platforms',
            ],
          },
          {
            name: 'Higher Education',
            subcategories: [
              'Universities & Colleges',
              'Community Colleges',
              'Technical Institutes',
              'Graduate Schools',
              'Online Degree Programs',
            ],
          },
          {
            name: 'Test Preparation',
            subcategories: [
              'SAT/ACT Prep',
              'GRE/GMAT Prep',
              'TOEFL/IELTS Prep',
              'LSAT Prep',
              'Professional Certification Exam Prep',
            ],
          },
          {
            name: 'Tutoring & Private Lessons',
            subcategories: [
              'Math, Science, and English Tutoring',
              'Music & Art Lessons',
              'Language Learning',
              'Exam Prep Tutors',
            ],
          },
          {
            name: 'Adult Education & Lifelong Learning',
            subcategories: [
              'Career Development Programs',
              'Language Courses',
              'Online Skill Development (Coding, Design)',
              'Business & Leadership Training',
              'Financial Literacy Courses',
            ],
          },
        ],
      },
{  
  category: "Real Estate",
    subcategories: [
      {
        name: "Residential Properties",
        subcategories: [
          "Apartments & Condominiums",
          "Single Family Homes",
          "Townhouses & Villas",
          "Luxury Real Estate",
          "Vacation Homes & Rentals"
        ]
      },
      {
        name: "Commercial Properties",
        subcategories: [
          "Office Spaces",
          "Retail Properties",
          "Industrial Properties",
          "Mixed-Use Developments",
          "Warehouses & Storage Facilities"
        ]
      },
      {
        name: "Real Estate Services",
        subcategories: [
          "Property Management",
          "Real Estate Agents & Brokers",
          "Real Estate Investment",
          "Home Staging & Interior Design",
          "Real Estate Appraisal & Valuation"
        ]
      },
      {
        name: "Real Estate Development",
        subcategories: [
          "New Construction Projects",
          "Renovations & Remodeling",
          "Property Flipping",
          "Sustainable & Green Building"
        ]
      },
      {
        name: "Rentals",
        subcategories: [
          "Short-Term Rentals (Airbnb, Vacation Rentals)",
          "Long-Term Rentals",
          "Property Leasing"
        ]
      }
    ]
  },
      {
    
    category: "Event Planning",
    subcategories: [
      {
        name:"Corporate Events",
        subcategories: [
          "Conferences & Seminars",
          "Team Building Activities",
          "Trade Shows & Exhibitions",
          "Product Launches",
          "Corporate Retreats"
        ]
      },
      {
        name: "Weddings",
        subcategories: [
          "Wedding Planning & Coordination",
          "Bridal Showers & Bachelor/Bachelorette Parties",
          "Venue Selection & Decor",
          "Catering & Entertainment"
        ]
      },
      {
        name: "Social Events",
        subcategories: [
          "Birthday Parties",
          "Anniversaries",
          "Baby Showers & Gender Reveals",
          "Holiday Parties",
          "Graduations"
        ]
      },
      {
        name: "Catering & Food Services",
        subcategories: [
          "Buffet & Plated Meals",
          "Cocktail Parties",
          "Dessert Stations",
          "Food Trucks for Events"
        ]
      },
      {
        name: "Event Rentals",
        subcategories: [
          "Tents, Chairs & Tables",
          "Audio/Visual Equipment",
          "Decor & Lighting",
          "Stage & Sound Systems",
          "Event Transport Services"
        ]
      }
    ]
  },
  {
    
    "category": "Automotive",
    subcategories: [
      {
        name: "Car Sales",
        subcategories: [
          "New Cars",
          "Used Cars",
          "Luxury & Exotic Cars",
          "Electric Vehicles (EVs)",
          "Car Leasing & Rentals"
        ]
      },
      {
        name: "Car Services & Repairs",
        subcategories: [
          "Oil Changes & Routine Maintenance",
          "Tire Sales & Services",
          "Brake Repair & Replacement",
          "Engine Diagnostics",
          "Auto Body & Collision Repair"
        ]
      },
      {
        name: "Parts & Accessories",
        subcategories: [
          "Car Parts & Components",
          "Interior Accessories",
          "Exterior Accessories",
          "Performance Parts",
          "Car Audio & Entertainment Systems"
        ]
      },
      {
        name: "Vehicle Detailing & Cleaning",
        subcategories: [
          "Interior Detailing",
          "Exterior Washing & Waxing",
          "Paint Protection & Coatings",
          "Ceramic Coatings & Polishing"
        ]
      },
      {
        name: "Car Insurance & Financing",
        subcategories: [
          "Auto Loans",
          "Insurance Providers",
          "Extended Warranties",
          "Leasing & Financing Options"
        ]
      }
    ]
  },
  {
    
    "category": "Art & Design",
    subcategories: [
      {
        name: "Graphic Design",
        subcategories: [
          "Logo & Brand Identity Design",
          "Web & App Design",
          "Print Media (Flyers, Posters, Brochures)",
          "Packaging Design",
          "Illustration & Digital Art"
        ]
      },
      {
        name: "Interior Design",
        subcategories: [
          "Residential Design",
          "Commercial Design",
          "Home Staging & Decor",
          "Sustainable Design",
          "Furniture Design & Customization"
        ]
      },
      {
        name: "Fine Arts",
        subcategories: [
          "Painting & Drawing",
          "Sculpture",
          "Photography",
          "Mixed Media",
          "Art Galleries & Exhibitions"
        ]
      },
      {
        name: "Fashion Design",
        subcategories: [
          "Clothing Design",
          "Textile & Pattern Design",
          "Fashion Styling",
          "Custom Fashion & Tailoring"
        ]
      },
      {
        name: "Industrial & Product Design",
        subcategories: [
          "Consumer Electronics Design",
          "Furniture & Home Products",
          "Automotive Design",
          "Packaging & Branding"
        ]
      }
    ]
  },
  {
    
    "category": "Hotel & Travel",
    subcategories: [
      {
        name: "Hotel Types",
        subcategories: [
          "Luxury Hotels & Resorts",
          "Boutique Hotels",
          "Budget Hotels & Motels",
          "Bed & Breakfasts",
          "Vacation Rentals & Airbnbs"
        ]
      },
      {
        name: "Travel Services",
        subcategories: [
          "Flight Booking & Airfare Deals",
          "Car Rentals & Airport Transfers",
          "Cruise Packages",
          "Group Tours & Excursions",
          "Travel Insurance"
        ]
      },
      {
        name: "Tourism Activities",
        subcategories: [
          "City Tours & Sightseeing",
          "Adventure & Eco-Tourism",
          "Cultural & Historical Tours",
          "Food & Wine Tours",
          "Wildlife Safaris"
        ]
      },
      {
        name: "Travel Gear & Accessories",
        subcategories: [
          "Luggage & Bags",
          "Travel Clothing & Footwear",
          "Travel Gadgets & Tech",
          "Outdoor & Adventure Gear"
        ]
      }
    ]
  }

    ];

    const result = await this.categoryService.insertCategories(categories);
    return result;
  }
}
