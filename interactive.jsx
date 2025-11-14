import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Play, Zap, Globe, BookOpen, Users, Star, AlertCircle, TrendingUp, Code, Database, Radio } from 'lucide-react';

export default function TransClass() {
  const [activeTab, setActiveTab] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(0);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: '即時語音識別',
      description: '採用 Azure Speech-to-Text API，支援中文、英文、日文、越南文等多種語言輸入，識別準確率高達90%以上。'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: '多語言翻譯',
      description: '整合 Azure Translator API，支援100+種語言互譯，特別優化學術術語翻譯，提供流暢自然的課堂內容轉譯。'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: '課程紀錄管理',
      description: '自動生成課程摘要與翻譯紀錄，支援多格式匯出功能，方便學生課後複習與教師教學評估。'
    }
  ];

  const techStack = [
    {
      layer: '語音識別層',
      tech: 'Microsoft Azure Speech-to-Text API',
      icon: <Radio className="w-6 h-6" />,
      features: ['100+ 語言支援', '即時串流識別', '自訂語言模型', '90%+ 準確率']
    },
    {
      layer: '翻譯層',
      tech: 'Microsoft Azure Translator API',
      icon: <Globe className="w-6 h-6" />,
      features: ['100+ 語言互譯', '領域適應性優化', '上下文理解', '自訂翻譯']
    },
    {
      layer: '資料管理層',
      tech: 'PostgreSQL 關聯式資料庫',
      icon: <Database className="w-6 h-6" />,
      features: ['強大 SQL 支援', '併發處理能力', 'ACID 事務支援', '開源成本效益']
    },
    {
      layer: '即時通訊層',
      tech: 'WebSocket & Socket.IO',
      icon: <Radio className="w-6 h-6" />,
      features: ['全雙工連線', '自動重新連線', '事件系統', '即時同步']
    }
  ];

  const advantages = [
    '多語言支援廣泛，滿足多國籍學生需求',
    '使用者介面簡潔友善，易於操作',
    '採用雲端服務架構，穩定可靠',
    '即時性強，準確率高',
    '支援多裝置平台（桌電、平板、手機）',
    '無需安裝軟體，瀏覽器即可使用'
  ];

  const limitations = [
    '對網路連線品質依賴度高',
    '專業術語翻譯準確度仍有提升空間',
    '嘈雜環境中語音識別效果受影響',
    '目前支援中英日越文輸入',
    '離線環境無法使用'
  ];

  const faqs = [
    {
      question: '系統支援哪些語言？',
      answer: '系統支援 100+ 種語言的翻譯，語音識別目前支援中文、英文、日文、越南文等主要語言。'
    },
    {
      question: '語音識別的準確率是多少？',
      answer: '在安靜環境下，準確率可達 90% 以上。在嘈雜環境中會有所下降，這是語音識別技術的普遍限制。'
    },
    {
      question: '可以離線使用嗎？',
      answer: '不行，系統需要穩定的網路連線才能使用，因為需要調用雲端 API 服務。'
    },
    {
      question: '如何開始使用？',
      answer: '教師可以建立課程，學生使用課程連結加入。課程中選擇翻譯語言後即可開始實時翻譯。'
    },
    {
      question: '資料會被保存多久？',
      answer: '課程紀錄會被保存在資料庫中，用戶可隨時查詢和匯出。具體保留政策請參考使用條款。'
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 3000);
  };

  const renderTabContent = () => {
    switch(activeTab) {
      case 'overview':
        return (
          <div className="space-y-6 animate-fade-in">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg border border-blue-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">系統概述</h3>
              <p className="text-gray-700 mb-4">
                TransClass 是一套專門為國際學生設計的多語言即時課堂翻譯系統。系統採用 Microsoft Azure 的先進 AI 技術，能夠在課堂進行中即時轉換語音並翻譯成多種語言，幫助外籍學生克服語言障礙。
              </p>
              <p className="text-gray-700">
                系統整合了語音識別、機器翻譯、資料庫管理等多項先進技術，提供穩定可靠的雲端解決方案。透過直觀的使用者介面，讓教師和學生都能輕鬆使用。
              </p>
            </div>
          </div>
        );
      case 'technology':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900">技術架構詳解</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {techStack.map((stack, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-blue-600">{stack.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900">{stack.layer}</h4>
                      <p className="text-sm text-gray-600">{stack.tech}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {stack.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-700">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        );
      case 'team':
        return (
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">開發團隊</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg text-center border-2 border-blue-300">
                <div className="w-20 h-20 bg-blue-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg text-gray-900">林意晨</h4>
                <p className="text-sm text-gray-600 mt-2">系統架構設計</p>
                <p className="text-sm text-gray-600">後端開發</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg text-center border-2 border-green-300">
                <div className="w-20 h-20 bg-green-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg text-gray-900">林瑜君</h4>
                <p className="text-sm text-gray-600 mt-2">前端開發</p>
                <p className="text-sm text-gray-600">UX 設計</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center border-2 border-purple-300">
                <div className="w-20 h-20 bg-purple-300 rounded-full mx-auto mb-4"></div>
                <h4 className="font-bold text-lg text-gray-900">邱昭彰</h4>
                <p className="text-sm text-gray-600 mt-2">指導教授</p>
                <p className="text-sm text-gray-600">元智大學資管系</p>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 導覽列 */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Radio className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">TransClass</span>
            </div>
            
            {/* 桌面選單 */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition">特色</a>
              <a href="#tech" className="text-gray-700 hover:text-blue-600 transition">技術</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-600 transition">常見問題</a>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                開始使用
              </button>
            </div>

            {/* 行動選單按鈕 */}
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* 行動選單 */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t space-y-4 py-4 animate-slide-down">
              <a href="#features" className="block text-gray-700 hover:text-blue-600">特色</a>
              <a href="#tech" className="block text-gray-700 hover:text-blue-600">技術</a>
              <a href="#faq" className="block text-gray-700 hover:text-blue-600">常見問題</a>
              <button className="w-full bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">開始使用</button>
            </div>
          )}
        </div>
      </nav>

      {/* 英雄區段 */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              打破語言隔閡的<br />智慧課堂翻譯系統
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              即時多語言翻譯 • 提升學習效果 • 促進文化交流
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-blue-50 transition transform hover:scale-105">
                立即體驗 <Play className="w-5 h-5 inline ml-2" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition">
                了解更多
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 特色區段 */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">核心特色</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedFeature(idx)}
                className={`p-8 rounded-lg transition-all cursor-pointer transform hover:scale-105 ${
                  selectedFeature === idx 
                    ? 'bg-blue-600 text-white shadow-xl' 
                    : 'bg-white text-gray-900 shadow hover:shadow-lg'
                }`}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                  selectedFeature === idx ? 'bg-blue-400' : 'bg-blue-100'
                }`}>
                  <div className={selectedFeature === idx ? 'text-white' : 'text-blue-600'}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className={selectedFeature === idx ? 'text-blue-50' : 'text-gray-600'}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 互動標籤區段 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">詳細資訊</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <div className="flex flex-wrap border-b">
              {[
                { id: 'overview', label: '系統概述' },
                { id: 'technology', label: '技術架構' },
                { id: 'team', label: '開發團隊' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 font-semibold transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white border-b-2 border-blue-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="p-8">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </section>

      {/* 優缺點比較 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">系統評估</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-green-600 mb-6 flex items-center gap-2">
                <Star className="w-6 h-6" /> 系統優點
              </h3>
              <ul className="space-y-3">
                {advantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-green-500 font-bold text-lg mt-1">✓</span>
                    <span className="text-gray-700">{adv}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-orange-600 mb-6 flex items-center gap-2">
                <AlertCircle className="w-6 h-6" /> 系統限制
              </h3>
              <ul className="space-y-3">
                {limitations.map((lim, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-orange-500 font-bold text-lg mt-1">!</span>
                    <span className="text-gray-700">{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 常見問題 */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">常見問題</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 py-4 bg-white text-gray-700 border-t animate-slide-down">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 聯絡表單 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">聯絡我們</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">姓名</label>
              <input
                type="text"
                name="name"
                value={contactForm.name}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="請輸入您的姓名"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">電子郵件</label>
              <input
                type="email"
                name="email"
                value={contactForm.email}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="請輸入您的電子郵件"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">訊息</label>
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleFormChange}
                required
                rows="5"
                className="w-full px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                placeholder="請輸入您的訊息"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-bold py-3 rounded-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              發送訊息
            </button>
            {formSubmitted && (
              <div className="bg-green-500 text-white p-4 rounded-lg text-center animate-pulse">
                ✓ 訊息已發送，感謝您的聯絡！
              </div>
            )}
          </form>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">TransClass</h4>
              <p className="text-sm">智慧課堂翻譯系統</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">產品</h4>
              <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">功能</a></li><li><a href="#" className="hover:text-white">定價</a></li></ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">公司</h4>
              <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">關於</a></li><li><a href="#" className="hover:text-white">聯絡</a></li></ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">法律</h4>
              <ul className="space-y-2 text-sm"><li><a href="#" className="hover:text-white">隱私</a></li><li><a href="#" className="hover:text-white">條款</a></li></ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; 2025 TransClass - 元智大學資訊管理學系。版權所有。</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}