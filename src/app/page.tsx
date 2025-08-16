'use client';

import { useState, useEffect } from 'react';
import { ReviewData, Platform } from '@/types/review';
import { generateRandomReviewData } from '@/utils/dataGenerator';
import { ReviewForm } from '@/components/ReviewForm';
import { ReviewPreview } from '@/components/ReviewPreview';
import { Sparkles, Shield } from 'lucide-react';

export default function Home() {
  const [reviewData, setReviewData] = useState<ReviewData>({
    id: '',
    name: '',
    username: '',
    avatar: '',
    gender: 'random',
    platform: 'reddit',
    title: '',
    content: '',
    rating: 5,
    date: new Date(),
    likes: 0,
    replies: 0,
    shares: 0,
    verified: false,
  });

  const generateCompleteRandomReview = async () => {
    const randomData = await generateRandomReviewData(reviewData.platform, reviewData.gender);
    setReviewData(prev => ({ ...prev, ...randomData }));
  };

  const updateReviewData = (updates: Partial<ReviewData>) => {
    setReviewData(prev => ({ ...prev, ...updates }));
  };

  // Generate initial random data
  useEffect(() => {
    generateCompleteRandomReview();
  }, []);

  // Regenerate username when platform changes
  useEffect(() => {
    const updateUsername = async () => {
      const randomData = await generateRandomReviewData(reviewData.platform, reviewData.gender);
      if (randomData.username) {
        setReviewData(prev => ({ ...prev, username: randomData.username! }));
      }
    };
    updateUsername();
  }, [reviewData.platform]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ReviewGen
                </h1>
                <p className="text-sm text-gray-600">AI-Powered Social Media Review Generator</p>
              </div>
            </div>
            <div className="ml-auto flex items-center gap-2 text-sm text-gray-600">
              <Shield size={16} />
              <span>For Educational Purposes Only</span>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Form Section */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
              <h2 className="text-xl font-bold mb-2">Create Authentic-Looking Reviews</h2>
              <p className="text-purple-100">
                Generate realistic social media reviews with AI-powered content and authentic platform styling. 
                Perfect for mockups, presentations, and educational purposes.
              </p>
            </div>
            
            <ReviewForm
              reviewData={reviewData}
              onUpdate={updateReviewData}
              onGenerateRandom={generateCompleteRandomReview}
            />
          </div>

          {/* Preview Section */}
          <div className="space-y-6">
            <ReviewPreview
              reviewData={reviewData}
              onRefresh={generateCompleteRandomReview}
            />
            
            {/* Tips */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="font-semibold text-blue-900 mb-2">💡 Tips for Realistic Reviews</h3>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Keep content natural and avoid overly promotional language</li>
                <li>• Use platform-appropriate language and tone</li>
                <li>• Adjust engagement metrics to realistic levels</li>
                <li>• Consider the posting date when setting context</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Shield className="text-yellow-600 mt-1" size={20} />
            <div>
              <h3 className="font-semibold text-yellow-900 mb-2">Important Disclaimer</h3>
              <p className="text-yellow-800 text-sm leading-relaxed">
                This tool is designed for educational purposes, mockups, and presentations only. 
                Creating fake reviews for deceptive purposes is unethical and may violate platform terms of service. 
                Always use generated content responsibly and in compliance with applicable laws and regulations.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}