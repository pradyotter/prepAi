import { pgTable, serial, text, varchar } from 'drizzle-orm/pg-core';

export const MockInterview = pgTable('mockInterview', {
  id: serial('id').primaryKey(),
  jsonMockResp: text('jsonMockResp').notNull(),
  jobPostition: varchar('jobPostition').notNull(),
  jobDesc: varchar('jobDesc').notNull(),
  jobExperiance: varchar('jobExperiance').notNull(),
  createdBy: varchar('createdBy').notNull(),
  createdAt: varchar('createdAt'),
  mockId: varchar('mockId').notNull(),
});

export const UserAnswers = pgTable('userAnswers', {
  id: serial('id').primaryKey(),
  mockIdRef: varchar('mockId').notNull(),
  question: varchar('question').notNull(),
  correctAns: varchar('correctAns'),
  userAns: text('userAns'),
  feedback: text('feedback'),
  rating: text('rating'),
  createdAt: varchar('createdAt'),
});
