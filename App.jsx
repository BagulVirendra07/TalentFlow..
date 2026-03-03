import React, { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import SpotlightSearch from './components/Spotlight/SpotlightSearch';
import Dashboard from './pages/Dashboard';
import JobsBoard from './components/Jobs/JobsBoard';
import JobDetail from './components/Jobs/JobDetail';
import CandidatesList from './components/Candidates/CandidatesList';
import CandidatesBoard from './components/Candidates/CandidatesBoard';
import CandidateProfile from './components/Candidates/CandidateProfile';
import Builder from './components/Assessments/Builder';
import RuntimeForm from './components/Assessments/RuntimeForm';
import Analytics from './pages/Analytics';
import { seedIfNeeded } from './db/dexie';
import { ToastProvider } from './context/ToastContext';
import { ThemeProvider } from './context/ThemeContext';
import { SpotlightProvider } from './context/SpotlightContext';

export default function App() {
  useEffect(() => { seedIfNeeded(); }, []);

  return (
    <ThemeProvider>
      <ToastProvider>
        <SpotlightProvider>
          <div className="app-wrapper">
            <Navbar />
            <SpotlightSearch />
            <main className="page-content">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/jobs" element={<JobsBoard />} />
                <Route path="/jobs/:jobId" element={<JobDetail />} />
                <Route path="/candidates" element={<CandidatesList />} />
                <Route path="/candidates/board" element={<CandidatesBoard />} />
                <Route path="/candidates/:id" element={<CandidateProfile />} />
                <Route path="/assessments" element={<Builder />} />
                <Route path="/assessments/runtime/:assessmentId" element={<RuntimeForm />} />
                <Route path="/analytics" element={<Analytics />} />
              </Routes>
            </main>
          </div>
        </SpotlightProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
