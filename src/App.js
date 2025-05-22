import React, { useState, useEffect } from 'react';
import { BarChart, Bar, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [particles, setParticles] = useState([]);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    // Generate particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);

    // Trigger stats animation
    setTimeout(() => setStatsVisible(true), 500);
  }, []);

  const categories = [
    { 
      id: 'social', 
      title: 'Social Impact', 
      icon: '🛡️', 
      count: 4, 
      color: '#00fffc',
      projects: ['Toxicity Detection', 'Bias Analysis', 'Mental Health', 'Online Safety']
    },
    { 
      id: 'health', 
      title: 'Healthcare AI', 
      icon: '🧬', 
      count: 3, 
      color: '#fc00ff',
      projects: ['Cancer Detection', 'Emergency Response', 'Patient Evacuation']
    },
    { 
      id: 'business', 
      title: 'Business Analytics', 
      icon: '📊', 
      count: 3, 
      color: '#fffc00',
      projects: ['Revenue Optimization', 'Rating Prediction', 'Market Analysis']
    },
    { 
      id: 'vision', 
      title: 'Computer Vision', 
      icon: '🔍', 
      count: 2, 
      color: '#ff6b6b',
      projects: ['Real-time Detection', 'Security Systems']
    },
    { 
      id: 'nlp', 
      title: 'NLP & Text Mining', 
      icon: '💬', 
      count: 4, 
      color: '#4ecdc4',
      projects: ['Sentiment Analysis', 'Topic Modeling', 'Content Moderation', 'Transformers']
    },
    { 
      id: 'network', 
      title: 'Network Analysis', 
      icon: '🌐', 
      count: 2, 
      color: '#95e1d3',
      projects: ['Social Graphs', 'Viral Prediction']
    }
  ];

  const techStack = [
    { name: 'Python', level: 95 },
    { name: 'Machine Learning', level: 90 },
    { name: 'Deep Learning', level: 85 },
    { name: 'NLP', level: 88 },
    { name: 'Computer Vision', level: 82 },
    { name: 'Data Viz', level: 87 }
  ];

  const stats = [
    { label: 'Data Points', value: '500K+', progress: 95 },
    { label: 'Model Accuracy', value: '95%', progress: 95 },
    { label: 'Projects', value: '15+', progress: 75 },
    { label: 'Processing Speed', value: '80 FPS', progress: 90 }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        .glitch {
          text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00;
          animation: glitch 725ms infinite;
        }
        
        @keyframes glitch {
          0% { text-shadow: 0.05em 0 0 #00fffc, -0.03em -0.04em 0 #fc00ff, 0.025em 0.04em 0 #fffc00; }
          16% { text-shadow: -0.05em -0.025em 0 #00fffc, 0.025em 0.035em 0 #fc00ff, -0.05em -0.05em 0 #fffc00; }
          50% { text-shadow: 0.025em 0.05em 0 #00fffc, 0.05em 0 0 #fc00ff, 0 -0.05em 0 #fffc00; }
          100% { text-shadow: -0.025em 0 0 #00fffc, -0.025em -0.025em 0 #fc00ff, -0.025em -0.05em 0 #fffc00; }
        }
      `}</style>

      {/* Particles Background */}
      <div className="fixed inset-0 z-0">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animation: `float ${particle.duration}s ease-in-out infinite`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div className="text-center z-10">
          <h1 className="text-7xl md:text-8xl font-black mb-8 glitch">
            DATA ALCHEMIST
          </h1>
          <p className="text-2xl text-gray-300 animate-pulse">
            Transforming Raw Data into Digital Gold
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`text-center transform transition-all duration-1000 ${
                statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 mt-2">{stat.label}</div>
              <div className="mt-4 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-600 transition-all duration-2000"
                  style={{ 
                    width: statsVisible ? `${stat.progress}%` : '0%',
                    transitionDelay: `${index * 100 + 500}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Categories */}
      <div className="relative z-10 py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
          Project Universe
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className={`relative group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                activeCategory === category.id ? 'scale-105' : ''
              }`}
              onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500 transition-all duration-300">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{category.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{category.count} Projects</p>
                
                {activeCategory === category.id && (
                  <div className="mt-4 space-y-2 animate-slideIn">
                    {category.projects.map((project, idx) => (
                      <div 
                        key={idx} 
                        className="text-sm text-gray-300 pl-4 border-l-2 border-cyan-500"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        {project}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              
              <div 
                className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300"
                style={{ backgroundImage: `linear-gradient(45deg, ${category.color}40, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Visualization */}
      <div className="relative z-10 py-20 px-8 bg-gray-900">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        <div className="max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={techStack}>
              <PolarGrid stroke="#374151" />
              <PolarAngleAxis dataKey="name" stroke="#9CA3AF" />
              <Radar
                name="Skills"
                dataKey="level"
                stroke="#06b6d4"
                fill="#06b6d4"
                fillOpacity={0.3}
                strokeWidth={2}
              />
              <Tooltip />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {['Python', 'PyTorch', 'TensorFlow', 'BERT', 'YOLOv8', 'GNN', 'R', 'Scikit-Learn', 'HuggingFace', 'Gurobi'].map((tech, idx) => (
            <div
              key={tech}
              className="px-6 py-3 bg-gray-800 rounded-full border border-gray-700 hover:border-cyan-500 hover:bg-gray-700 transform hover:scale-110 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${idx * 50}ms` }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="relative z-10 py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Real Impact
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-cyan-900 to-cyan-800 p-8 rounded-2xl text-center">
            <div className="text-6xl font-bold text-cyan-300">159K</div>
            <div className="text-xl mt-2">Comments Analyzed</div>
            <div className="text-sm text-gray-300 mt-4">Protecting children online</div>
          </div>
          <div className="bg-gradient-to-br from-purple-900 to-purple-800 p-8 rounded-2xl text-center">
            <div className="text-6xl font-bold text-purple-300">100%</div>
            <div className="text-xl mt-2">ICU Coverage</div>
            <div className="text-sm text-gray-300 mt-4">Emergency evacuation success</div>
          </div>
          <div className="bg-gradient-to-br from-pink-900 to-pink-800 p-8 rounded-2xl text-center">
            <div className="text-6xl font-bold text-pink-300">28%</div>
            <div className="text-xl mt-2">Revenue Saved</div>
            <div className="text-sm text-gray-300 mt-4">Through smart optimization</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;