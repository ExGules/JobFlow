import { supabase } from "./supabase";
import type { Job } from "@/entities/job/model/types";

type CreateJobData = {
    user_id: string;
    company: string;
    position: string;
    notes: string;
};

export const createJob = async (
    job: CreateJobData,
) => {
    const { data, error } = await supabase
    .from("jobs")
    .insert({...job,})
    .select()
    .single();

    if (error) {
        throw error;
    }

    return data as Job;
};

export const getJobs = async () => {
    const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .order("created_at", { ascending: false});

    if ( error ) {
        throw error;
    }

    return data as Job[];
}